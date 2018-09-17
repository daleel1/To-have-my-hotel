import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Logo, { thing } from "./Logo";
import Booking from "./Booking"
// const Booking = () => {
//   return (
//     <p> new booking availabel for {new Date().toLocaleDateString()}</p>
//   )
// };



const SpecialDeals = (props) =>{
      return (
    <p>
      {props.mentors.map(name => (
        <li>{name}</li>
      ))}
    </p>
);};

 
class App extends Component {
  logWhenClicked = () => {
    console.log("Button was clicked!");
  };
  render() {
    return <div className="App">
        <header className="App-header">
          <Logo name="new hotel" location="London" handleclick={this.logWhenClicked} />
        </header>
        <Booking bookingsCount={0} />
        <SpecialDeals mentors={["New", "Kash", "Davide", "German", "Gerald"]} />
        {thing}
      </div>;
  }
}

export default App;
