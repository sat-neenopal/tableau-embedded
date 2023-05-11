import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Signin from "./signin";
import Workbooks from "./workbooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      {/* <Workbooks/> */}

      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="workbooks" element={<Workbooks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
