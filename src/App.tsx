import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Setting from "./pages/Setting/Setting";
import NewToken from "./pages/NewToken/NewToken";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/new" element={<NewToken />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
