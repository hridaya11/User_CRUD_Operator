// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './layout/Navbar';
import Home from './pages/Home';

function App() {
  return <div className="App">
      <Navbar />
      <Home/>
    </div>
}

export default App;
