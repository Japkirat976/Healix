from app.database.mongodb import db
from app.utils.security import hash_password

user = {
    "name": "Japkirat",
    "email": "japkirat@gmail.com",
    "password": hash_password("test123")
}

result = db.users.insert_one(user)

print("Inserted ID:", result.inserted_id)