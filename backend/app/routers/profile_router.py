from fastapi import APIRouter
from app.schemas.profile_schema import ProfileSchema
from app.services.profile_service import save_profile
from app.services.profile_service import (
    save_profile,
    get_profile_by_name,
    update_profile_by_name
)

router = APIRouter()


@router.post("/profile")
def create_profile(profile: ProfileSchema):

    profile_id = save_profile(profile.model_dump())

    return {
        "message": "Profile created successfully",
        "profileId": profile_id
    }
    
@router.get("/profile/{name}")
def get_profile(name: str):

    profile = get_profile_by_name(name)

    if not profile:
        return {
            "message": "Profile not found"
        }

    return profile

@router.put("/profile/{name}")
def update_profile(name: str, updated_data: dict):

    updated_count = update_profile_by_name(
        name,
        updated_data
    )

    if updated_count == 0:
        return {
            "message": "No profile updated"
        }

    return {
        "message": "Profile updated successfully"
    }
