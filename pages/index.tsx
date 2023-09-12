import React from "react"
import Header from "./components/Header"
import ApiFetchComponent from "./components/ApiFetchComponent";

export interface Meal {
  idMeal: string;
  strMeal: string;
}

export interface MealAPIResponse {
  meals: Meal[] | null;
}

export default function Home() {
  return (
    <>
      <Header />
      <ApiFetchComponent/>
    </>
  )
}
