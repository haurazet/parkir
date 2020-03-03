import React from 'react';
import './App.css';
import Header from './component/Header'
import Home from './component/Home'
import Hitungkata from './component/hitungkata'
import Parkir from './component/parkir'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/hitungkata' exact component={Hitungkata}/>
        <Route path='/parkir' exact component={Parkir}/>
      </Switch>
    </div>
  );
}

export default App;


