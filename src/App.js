import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pagination from "./component/Pagination";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Pagination />}></Route>
          {/* <Route path="/blog" exact element={<BlogPost />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
