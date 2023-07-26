const MealsList = () => {
  const meals = [
    {
      id: 1,
      name: "Pizza",
      description: "Italian food",
      price: 22.99,
    },
    {
      id: 2,
      name: "Schnitzel",
      description: "German food",
      price: 16.5,
    },
    {
      id: 3,
      name: "Burger",
      description: "American food",
      price: 12.99,
    },
  ];

  return (
    <div>
      {meals.map((meal) => (
        <div key={meal.id}>
          <h3>{meal.name}</h3>
          <div>{meal.description}</div>
          <div>{meal.price}</div>
        </div>
      ))}
    </div>
  );
};

export default MealsList;
