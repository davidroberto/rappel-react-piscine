import { useState } from "react";

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    const responseApi = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const responseJson = await responseApi.json();

    setMeals(responseJson.meals);
  };

  if (meals.length === 0) {
    fetchMeals();
  }

  return (
    <div>
      <h1>Meals List</h1>
      <div>
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsList;
