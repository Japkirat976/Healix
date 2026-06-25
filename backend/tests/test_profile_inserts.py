from app.services.profile_service import save_profile


profile = {
    "name": "Japkirat",

    "age": 19,
    "gender": "Female",

    "height": 155,
    "weight": 102,
    "goalWeight": 70,

    "medicalConditions": ["PCOS"],

    "dietType": "Vegetarian",

    "fitnessGoals": ["Weight Loss"]
}


profile_id = save_profile(profile)

print("Profile Saved:", profile_id)