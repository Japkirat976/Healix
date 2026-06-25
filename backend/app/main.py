from fastapi import FastAPI
from app.routers.profile_router import router as profile_router

app = FastAPI()

app.include_router(profile_router)
