
import './App.css';
import Categories from './Components/Categories';
import Dashboard from './Components/Dashboard';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      </Routes>
   </Router>
  );
}

export default App;
