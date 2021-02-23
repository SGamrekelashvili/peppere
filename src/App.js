import React,{useState,useEffect} from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game1 from './game1'
import Game2 from './game2'
import Game3 from './game3'

function App() {

  return (
    <main>
    <Switch>
        <Route path="/" component={<h1>Hello</h1>} exact />
        <Route path="/game1" component={Game1} />
        <Route path="/game2" component={Game2} />
        <Route path="/game3" component={Game3} />
    </Switch>
    </main>
  );
}

export default App;
