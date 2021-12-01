import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BooksList from './BooksList';


function App() {
  return (

    <Router>
     <div>
      <Switch>

          <Route exact path="/books"><BooksList/></Route>

      </Switch>
      </div>
    </Router>

  );
}

export default App; 
