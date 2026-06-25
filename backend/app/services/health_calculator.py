def calculate_bmi(weight, height):
    height_m = height / 100
    return round(weight / (height_m ** 2), 2)


def calculate_water_goal(weight):
    return round(weight * 0.033, 2)


def calculate_calorie_goal(weight):
    return int(weight * 22)