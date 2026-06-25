from app.schemas.profile_schema import ProfileSchema

profile = ProfileSchema(
    name="Japkirat",
    age=19,
    gender="Female",
    height=155,
    weight=102,
    goalWeight=70,
    medicalConditions=["PCOS"]
)

print(profile)