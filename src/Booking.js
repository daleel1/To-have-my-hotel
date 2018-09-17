import React, { Component } from "react";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Numbookings: props.bookingsCount
    };
  }

  render() {
    var d = new Date().toLocaleDateString();
    return (
      <div>
        bookings Count: {this.state.Numbookings}
        <p>new booking availabel for {d}</p>
        <button onClick={this.addBooking}>Add Booking</button>
      </div>
    );
  }

  addBooking = () => {
    var newCount = this.state.Numbookings + 1;
    this.setState({
      Numbookings: newCount
    });
  };
}


export default Booking;
