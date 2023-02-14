import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import bg from "./assets/bg.jpg";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Navbarx from "./components/Navbarx";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Router>
      <Navbarx />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:tail" element={<Details />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
