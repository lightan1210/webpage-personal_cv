import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import Layout from './pages/Layout';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
