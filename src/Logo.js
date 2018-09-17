import React from "react";

const Logo = (props) => {
  return (
    <div>
      <img
        src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"
        className="App-logo"
        alt="logo"
        onClick={props.handleclick}
      />
      <h1 className="App-title">Welcome to {props.name} {props.location}</h1>
    </div>
  );
};


export const thing = "ting";

export default Logo;
