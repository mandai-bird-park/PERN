import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//  components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/NavBar';
import Error from './components/Error';
import DataTable from './components/DataTable';
import Aviary from './components/Aviary';
import Bird from './components/Bird';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>         
             <Route path="/home" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/attendance" component={DataTable}/>
             <Route path="/bird" component={Bird}/>
             <Route path="/aviary" component={Aviary}/>
             <Route path="/" component={Home}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
