import './App.css';
import React,{Component} from 'react'
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import ForLogin from './components/ForLogin'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/login" exact component={ForLogin}/>
        <Route path="/register" exact component={Form}/>
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
