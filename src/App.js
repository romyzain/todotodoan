import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { 
  Home,
  Login,
  Register,
  Todo,
  Verify
} from './Pages';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import { keepLogin } from './Redux/Action';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      keepLogin()
    )
  })

  return (
    <div>
      <Header/>
      <Route path='/' component={Home} exact/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/todo' component={Todo}/>
      <Route path='/verify' component={Verify}/>
    </div>
  );
}

export default App;
