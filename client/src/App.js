import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BooksList from './BooksList';
import Login from './Login';
import SignUp from './SignUp';
import HomePage from './HomePage';
import BookProfile from './BookProfile';
import NavBar from './NavBar';

function App() {
  return (

    <Router>
     <div>
  
      <Switch>

        <Route exact path="/"><HomePage/></Route>
        <Route exact path="/login"><Login/></Route>
        <Route exact path="/signup"><SignUp/></Route>
        <Route exact path="/books"><BooksList/></Route>
        <Route exact path="/books/:id"><BookProfile/></Route>

      </Switch>
      </div>
    </Router>

  );
}

export default App; 
