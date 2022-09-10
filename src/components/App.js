import React from "react";
import "../styles/App.css";
import picture from "../assets/illustration-hero.png";

const options = [
  { key: 0, plan: "32 GB Storage", price: "59" },
  { key: 1, plan: "64 GB Storage", price: "79" },
  { key: 2, plan: "128 GB Storage", price: "99" },
  { key: 3, plan: "256 GB Storage", price: "119" },
];

class App extends React.Component {
  constructor() {
    
  }

  changeHandler(e) {
    
  }

  submitHandler(e) {
    e.preventDefault();
    alert("Thanks for Checking Out!!");
  }

  render() {
    return (
      <div id="main">
        <div className="container">
          <div>
            <img
              src={picture}
              alt="man-with-headphones"
              className="top-pic"
            ></img>
          </div>
          <div className="content">
            <h2>One plus Nord Model</h2>
            <p>
              Select the model of your desire and place order. Thanks in advance:)
            </p>
          </div>
          <form onSubmit={this.submitHandler}>
            <div className="select-container">
              <div className="music-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <g fill="none" fillRule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                    <path
                      fill="#717FA6"
                      fillRule="nonzero"
                      d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                    />
                  </g>
                </svg>
              </div>
              <div className="plan">
                <h4 id="plan-title">{this.state.currentPlan.plan}</h4>
                <p id="plan-price">${this.state.currentPlan.price}</p>
              </div>
              <select
                onChange={this.changeHandler}
                className="select"
                id="select"
                defaultValue={"change"}
              >
                <option disabled value={"change"}>
                  Change
                </option>
                {options.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.plan}
                  </option>
                ))}
              </select>
            </div>
            <button className="button" type="submit">
              Proceed to Payment
            </button>
            <div className="cancel">
              <a href="/">Cancel Order</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
