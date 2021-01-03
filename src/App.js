import React, { Component } from 'react'
import './App.css';
import NavBar from './Components/Navbar/NavBar'
import Appetizers from './Components/Sections/Appetizers'
import Breakfast from './Components/Sections/Breakfast'
import Lunch from './Components/Sections/Lunch'
import Dinner from './Components/Sections/Dinner'
import Desserts from './Components/Sections/Desserts'
import Indian from './Components/Sections/Indian'
import Chinese from './Components/Sections/Chinese'
import Italian from './Components/Sections/Italian'
import Receipe from './Components/Sections/Receipe'
import Home from './Components/Sections/Home'
import Error from './Components/Sections/Error'
import Footer from './Components/Footer/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ReactGa from 'react-ga'

class App extends Component {

  componentDidMount(){
    console.log("Inside App component did mount")
    ReactGa.initialize('UA-168738867-1')
    ReactGa.pageview("/app")
  }
  render() {
    console.log("Inside App render")
    return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/appetizers" component={Appetizers}/>
          <Route path="/breakfast" component={Breakfast}/>
          <Route path="/lunch" component={Lunch}/>
          <Route path="/dinner" component={Dinner}/>
          <Route path="/desserts" component={Desserts}/>
          <Route path="/indian-receipes" component={Indian}/>
          <Route path="/chinese-receipes" component={Chinese}/>
          <Route path="/italian-receipes" component={Italian}/>
          <Route path="/receipes/:receipe" component={Receipe}/>
          <Route render={(props) => <Error {...props} ErrorType={'loading'}/>}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
    )
  }
}

export default App
