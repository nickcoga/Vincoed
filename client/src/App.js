import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeRestaurant from "./screens/HomeRestaurants/HomeRestaurants";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeRestaurant />} />
      </Routes>
    </Router>
  );
}

export default App;
