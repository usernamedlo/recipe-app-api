export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }
  
  export interface MealAPIResponse {
    meals: Meal[] | null;
  }
  