import { useEffect, useState } from "react";

const ListCategories = () => {
  const [categories, setCategories] = useState([]);
  const [mealsByCategory, setMealsByCategory] = useState([]);

  const fetchCategories = async () => {
    const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const categoriesJs = await categoriesResponse.json();

    setCategories(categoriesJs.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = async (titleCategory) => {
    const responseMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${titleCategory}`);
    const mealsByCategory = await responseMeals.json();

    setMealsByCategory(mealsByCategory.meals);
  };

  return (
    <div>
      <h2>Categories</h2>

      <div>
        <p>Recettes pour la catégorie sélectionnée :</p>
        {mealsByCategory.map((meal) => {
          return (
            <div key={meal.idMeal}>
              <h3>{meal.strMeal}</h3>
            </div>
          );
        })}
      </div>

      {categories.map((category) => {
        return (
          <div key={category.idCategory}>
            <h3>{category.strCategory}</h3>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <p>{category.strCategoryDescription}</p>
            <button onClick={() => handleCategoryClick(category.strCategory)}>Voir toutes les recettes</button>
          </div>
        );
      })}
    </div>
  );
};

export default ListCategories;
