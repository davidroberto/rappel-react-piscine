import { useEffect, useState } from "react";

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    const responseApi = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const responseJson = await responseApi.json();

    setMeals(responseJson.meals);
  };

  // useEffect permet d'executer du code
  // quand le composant est chargé

  // il permet de préciser si on veut executer le code
  // à chaque fois que le composant est chargé,
  // uniquement une fois au premier chargement du composant (fetch)
  // ou quand certaines variables sont modifiées (comme des filtres qui engendrent besoin de données raffraichies)
  useEffect(() => {
    fetchMeals();
  }, []);

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
