import React, { FC } from 'react';
import { Meal } from '../types';

interface MealListProps {
    meals: Meal[] | null;
}

const MealList: FC<MealListProps> = ({ meals }) => {
    return (
        <div>
            {meals ? (
                meals.map((meal) => (
                    <div className="h-96 flex justify-center flex-wrap item-center">
                        <div key={meal.idMeal} className="h-[32rem] w-[19rem] relative overflow-hidden rounded-lg mb-4">
                            <img
                                src={meal.strMealThumb}
                                alt="img"
                                className="w-64 h-64 absolute z-10"
                            />
                            <div className="h-48 w-full rounded-t-lg mt-16 bg-white opacity-40"></div>
                            <div className="bg-white rounded-b-lg h-40 w-full">
                                <span className="text-3xl font-medium bg-black text-center">
                                    <h3 className="mt-8 mb-4">{meal.strMeal}</h3>
                                </span>
                                <span className="flex justify-center">
                                    <hr className="w-64 border-t-1 border-gray-300" />
                                </span>
                                <div className="flex-1 w-full flex flex-wrap">
                                    <div className="text-lg font-medium text-gray-700 w-1/2 p-1">Temps</div>
                                    <div className="text-lg text-right font-medium text-gray-700 w-1/2 p-1">
                                        Portion
                                    </div>
                                    <div className="text-base font-medium text-gray-500 w-1/2 p-1">
                                        ??
                                    </div>
                                    <div className="text-base text-right font-medium text-gray-500 w-1/2 p-1">
                                        ??
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            ) : (
                <p>No meals found</p>
            )}
        </div>
    );
};

export default MealList;
