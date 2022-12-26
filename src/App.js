import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Design from "./Pages/Design";
import Reviews from "./Pages/Reviews";
import Users from "./Pages/Users";
import Errorpage from "./Pages/Errorpage";
import "./App.css";

function App() {
  return (
    <Router>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Design">Design</Link>
      </li>
      <li>
        <Link to="/Reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/Users">Users</Link>
      </li>
      <li>
        <Link to="/Errorpage">Errorpage</Link>
      </li>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Users" element={<Users />} />

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
