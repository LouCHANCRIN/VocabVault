from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from .database import Base, engine


class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True, nullable=False)
    title = Column(String, nullable=False)
    content = Column(String, nullable=False)
    published = Column(Boolean, default=True, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())
    owner_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    
    owner = relationship('User')


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, nullable=False)
    email = Column(String, nullable=False, unique=True)
    username = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())


class Word(Base):
    __tablename__ = "words"

    id = Column(Integer, primary_key=True, index=True, nullable=False)
    radical = Column(String, nullable=False)
    frequency = Column(String, nullable=False)
    general_standard = Column(Integer, default=True, nullable=False)
    encounters = Column(Integer, default=True, nullable=False)
    fraction_of_the_language = Column(String, default=True, nullable=False)
    hsk1 = Column(String, default=True, nullable=False)
    hsk2 = Column(String, default=True, nullable=False)
    stroke_count = Column(Integer, default=True, nullable=False)
    character = Column(String, default=True, nullable=False)
    pinyin = Column(String, default=True, nullable=False)
    pinyin2 = Column(String, default=True, nullable=False)
    tone = Column(String, default=True, nullable=False)
    meaning = Column(String, default=True, nullable=False)

    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=func.now())

Base.metadata.create_all(bind=engine)