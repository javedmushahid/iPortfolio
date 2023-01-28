import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

import Signup from './components/Signup'
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
   <>
    <div className='container'>
    <Navbar/>
   <Switch>
    <Route exact path='/about'>
    <About/>
    </Route>
    <Route exact path='/'>
    <Home />
    </Route>
    
    {/* <Route exact path='/login'>
    <Login/>
    </Route>

    <Route exact path='/signup'>
    <Signup/>
    </Route> */}
    </Switch>
    </div>
    
    </>

  );
}


export default App;
