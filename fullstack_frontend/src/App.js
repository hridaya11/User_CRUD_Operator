// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddUsers from './users/AddUsers';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return <div className="App">
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/adduser" element={<AddUsers />} />
      <Route exact path="/edituser/:id" element={<EditUser />} />
      <Route exact path="/viewuser/:id" element={<ViewUser />} />
      </Routes>
      </Router>
      
    </div>
}

export default App;
