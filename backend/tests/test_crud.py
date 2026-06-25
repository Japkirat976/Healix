from app.database.mongodb import db

# READ ONE USER
user = db.users.find_one({"email": "japkirat@gmail.com"})

print("User Found:")
print(user)

# UPDATE USER
db.users.update_one(
    {"email": "japkirat@gmail.com"},
    {"$set": {"name": "Japkirat Kaur"}}
)

updated_user = db.users.find_one(
    {"email": "japkirat@gmail.com"}
)

print("\nUpdated User:")
print(updated_user)

# DELETE USER
delete_result = db.users.delete_one(
    {"email": "japkirat@gmail.com"}
)

print("\nDeleted Documents:", delete_result.deleted_count)