import Home from './Home';
import Login from './Login';
import Main from './Main';
import SignUp from './SignUp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProvider from './UserContext';

function App() {
  return (
    <div>
    <UserProvider>
    <Router>
      <div>
        <Routes>
          <Route path='/'Component={Home}/>
          <Route path='/signup' Component={SignUp}/>
          <Route path='/login' Component={Login}/>
          <Route path='/main' Component={Main}/>
        </Routes>
      </div>
    </Router>
    </UserProvider>
    </div>
  );
}

export default App;
