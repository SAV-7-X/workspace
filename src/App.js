import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Dashboard from './Pages/dashboard';
import Login from './Pages/login';
import Register from './Pages/register';

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
