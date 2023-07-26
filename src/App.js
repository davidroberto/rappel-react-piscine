import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import MealsList from "./MealsList";
import RandomMeal from "./RandomMeal";
import SearchMeals from "./SearchMeals";

function App() {
  return (
    <>
      <Header />
      <SearchMeals />
      {/* <RandomMeal /> */}
      {/* <MealsList /> */}
      <Footer />
    </>
  );
}

export default App;
