import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksList from './BooksList';
import Login from './Login';
import BookProfile from './BookProfile';
import SignUp from './SignUp';
// import NavBar from './NavBar';

function App() {

  return (

    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
     <div>
      <h1>Library</h1>
      <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/:id" element={<BookProfile />} />
      </Routes>
      {/* <NavBar/> */}
      </div>
    </Router>

  );
}

export default App; 
