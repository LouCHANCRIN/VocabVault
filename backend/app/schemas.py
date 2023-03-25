from typing import List, Union, Optional
import datetime

from pydantic import BaseModel, EmailStr


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    email: EmailStr
    created_at: datetime.datetime

    class Config:
        orm_mode = True


class PostBase(BaseModel):
    title: str
    content: str
    
        
class PostResponse(PostBase):
    published: bool
    created_at: datetime.datetime
    owner_id: int
    
    owner: UserResponse

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str
    

class TokenData(BaseModel):
    id: Optional[str] = None