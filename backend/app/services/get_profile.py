def get_profile_by_name(name):

    profile = profiles_collection.find_one(
        {"name": name}
    )

    if profile:
        profile["_id"] = str(profile["_id"])

    return profile