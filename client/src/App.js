import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BooksList from './BooksList';
import Login from './Login';
import BookProfile from './BookProfile';
import SignUp from './SignUp';
import NavBar from './NavBar';

function App() {

  return (

    <Router>
     <div>
      <h1>Library</h1>
      <Switch>
        <Route exact path="/signup"><SignUp/></Route>
        <Route exact path="/login"><Login/></Route>
        <Route exact path="/books"><BooksList/></Route>
        <Route exact path="/books/:id"><BookProfile/></Route>
      </Switch>
      <NavBar/>
      </div>
    </Router>

  );
}

export default App; 
