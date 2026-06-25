from app.database.mongodb import db

user = {
    "name": "Japkirat",
    "email": "japkirat@gmail.com",
    "password": "test123"
}

result = db.users.insert_one(user)

print("Inserted ID:", result.inserted_id)