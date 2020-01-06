import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

/*
function App() {
  return (
    <div className="App">
     <Navbar dark color='primary'>
       <div className='container'>
         <NavbarBrand href='/'> Ristorante Con Fusion</NavbarBrand>
       </div>
     </Navbar>
     <Menu/>
    </div>
  );
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
    return(
      <Menu dishes={this.state.dishes}/>
    );    
  }
}

export default App;
