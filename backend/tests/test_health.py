from app.services.health_calculator import (
    calculate_bmi,
    calculate_water_goal,
    calculate_calorie_goal
)

print("BMI:", calculate_bmi(102, 155))
print("Water:", calculate_water_goal(102))
print("Calories:", calculate_calorie_goal(102))