from app.models.profile_model import profiles_collection
from app.services.health_calculator import (
    calculate_bmi,
    calculate_water_goal,
    calculate_calorie_goal
)


def save_profile(profile_data):

    profile_data["bmi"] = calculate_bmi(
        profile_data["weight"],
        profile_data["height"]
    )

    profile_data["dailyWaterGoal"] = calculate_water_goal(
        profile_data["weight"]
    )

    profile_data["dailyCalorieGoal"] = calculate_calorie_goal(
        profile_data["weight"]
    )

    result = profiles_collection.insert_one(profile_data)

    return str(result.inserted_id)

def get_profile_by_name(name):

    profile = profiles_collection.find_one(
        {"name": name}
    )

    if profile:
        profile["_id"] = str(profile["_id"])

    return profile

def update_profile_by_name(name, updated_data):

    result = profiles_collection.update_one(
        {"name": name},
        {"$set": updated_data}
    )

    return result.modified_count