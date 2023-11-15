import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import New from "./page/New";
import Services from "./page/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
