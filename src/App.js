import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Signin from "./signin";
import Workbooks from "./pages/workbooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";


function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      {/* <Workbooks/> */}

      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/workbooks" element={<Workbooks />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
