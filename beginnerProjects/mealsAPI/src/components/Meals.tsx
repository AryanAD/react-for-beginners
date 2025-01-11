import { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, []);

  return (
    <div className="container mx-auto my-auto flex justify-center max-w-[80%] flex-col mt-4">
      <h1 className="mb-3 text-2xl font-bold text-teal-500 underline">Meals</h1>
      <div className="grid grid-cols-3 gap-6">
        {meals.map((meal: any) => (
          <div
            key={meal.idMeal}
            className="bg-white border-2 rounded-lg shadow-sm drop-shadow-md border-emerald-50"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="object-cover w-full h-40 rounded-t-lg"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold text-emerald-500">
                {meal.strMeal}
              </h2>
              <p className="text-sm text-gray-500">
                {meal.strInstructions.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
