import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateDishes from "./screens/CreateDishes/CreateDishes";
import CreateRestaurant from "./screens/CreateRestaurant/CreateRestaurant";
import Dishes from "./screens/Dishes/Dishes";
import EditDishes from "./screens/EditDishes/EditDIshes";
import EditRestaurant from "./screens/EditRestaurant/EditRestaurant";
import HomeRestaurant from "./screens/HomeRestaurants/HomeRestaurants";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [dishes, setDishes] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomeRestaurant
              restaurants={restaurants}
              setRestaurants={setRestaurants}
            />
          }
        />
        <Route path="/restaurants/new" element={<CreateRestaurant />} />
        <Route
          path="/restaurants/:id/edit"
          element={<EditRestaurant restaurants={restaurants} />}
        />
        <Route
          path="/restaurants/:id"
          element={<Dishes dishes={dishes} setDishes={setDishes} />}
        />
        <Route path="/restaurants/:id/dishes/new" element={<CreateDishes />} />
        <Route
          path="/restaurants/:id/dishes/:id/edit"
          element={<EditDishes dishes={dishes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
