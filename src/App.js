import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './pages/calculator';
import Home from './pages/home';
import Quote from './pages/quote';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/calculator" Component={Calculator} />
        <Route exact path="/quote" Component={Quote} />
      </Routes>
    </Router>
  );
}

export default App;
