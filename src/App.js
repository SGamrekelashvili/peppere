import React,{useState,useEffect} from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game1 from './game1'
import Game2 from './Game2'
import Game3 from './Game3'


function App() {
  return (
 <Router>
    <div className="App">
    <Switch>
        <Route path='/game1'>
            <Game1 />
        </Route>
        <Route path='/game2'>
            <Game2 />
        </Route>
        <Route path='/game3'>
            <Game3 />
        </Route>
        <Route path='/'>
        </Route>  
    </Switch>
    </div>
    </Router>
  );
}

export default App;
