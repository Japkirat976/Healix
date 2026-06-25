from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime


class ProfileSchema(BaseModel):

    userId: Optional[str] = None

    name: str

    age: int = Field(..., gt=0)
    gender: str

    height: float = Field(..., gt=0)
    weight: float = Field(..., gt=0)
    goalWeight: float = Field(..., gt=0)

    medicalConditions: List[str] = []
    medications: str = ""

    hasReports: bool = False

    dietType: str = ""
    mealsPerDay: int = 0

    waterIntake: float = 0

    foodAllergies: List[str] = []
    likedFoods: List[str] = []
    dislikedFoods: List[str] = []

    monthlyFoodBudget: float = 0

    exerciseFrequency: str = ""
    preferredExercise: str = ""
    workoutExperience: str = ""

    sleepHours: float = 0

    stressLevel: str = ""

    fitnessGoals: List[str] = []

    dailyStepGoal: int = 0

    dailyPhysicalActivities: str = ""

    bmi: Optional[float] = None
    dailyWaterGoal: Optional[float] = None
    dailyCalorieGoal: Optional[int] = None

    createdAt: datetime = datetime.utcnow()