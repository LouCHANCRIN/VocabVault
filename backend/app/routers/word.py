from fastapi import APIRouter, Depends, Response, status, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional


from ..schemas import PostBase, PostResponse
from .. import models, oauth2
from ..database import get_db

router = APIRouter(
    prefix="/words",
    tags=["Words"],
    # dependencies=[Depends(get_token_header)],
    # responses={404: {"description": "Not found"}},
)

@router.post('/', status_code=201, response_model=PostResponse)
def insert_word(post: PostBase, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    post = models.Post(owner_id=current_user.id, **post.dict())
    db.add(post)
    db.commit()
    db.refresh(post)
    return post