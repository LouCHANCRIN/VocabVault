from fastapi import APIRouter, Depends, Response, status, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional


from ..schemas import PostBase, PostResponse
from .. import models, oauth2
from ..database import get_db

router = APIRouter(
    prefix="/posts",
    tags=["Posts"],
    # dependencies=[Depends(get_token_header)],
    # responses={404: {"description": "Not found"}},
)


@router.get("/", response_model=List[PostResponse])
def get_posts(db: Session = Depends(get_db), limit: int = 10, skip: int = 0, search: Optional[str] = ''):
    posts = db.query(models.Post).filter(models.Post.title.contains(search)).limit(limit).offset(skip).all()
    return posts


@router.post('/', status_code=201, response_model=PostResponse)
def create_post(post: PostBase, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    post = models.Post(owner_id=current_user.id, **post.dict())
    db.add(post)
    db.commit()
    db.refresh(post)
    return post


@router.get('/{id}', response_model=PostResponse)
def get_post(id: int, db: Session = Depends(get_db)):
    post_content = db.query(models.Post).filter(models.Post.id == id).first()
    if not post_content:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f'Post {id} does not exist'
        )
    return post_content


@router.delete('/{id}', status_code=status.HTTP_204_NO_CONTENT)
def delete_post(id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    post_query = db.query(models.Post).filter(models.Post.id == id)
    
    post = post_query.first()
    if post == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f'Post {id} does not exist'
        )

    if post.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f'Not authorized to delete this post'
        )

    post_query.delete(synchronize_session=False)
    db.commit()

    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.put("/{id}")
def update_post(id: int, new_post: PostBase, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    post_query = db.query(models.Post).filter(models.Post.id == id)

    post = post_query.first()
    if post == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f'Post {id} does not exist'
        )
        
    if post.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f'Not authorized to update this post'
        )

    post_query.update(new_post.dict(), synchronize_session=False)
    db.commit()

    return {"message": f"Post {id} was updated"}
