import "./App.css";
import iconStar from "./assets/icon-star.svg";
import iconThankYou from "./assets/illustration-thank-you.svg";
import React, { useEffect, useState } from "react";

function App() {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);

  const [numberSelected, setNumberSelected] = useState(null);
  const [submitted, setSubmtited] = useState(false);

  const selectToggle1 = () => {
    setSelected1(true);
    setSelected2(false);
    setSelected3(false);
    setSelected4(false);
    setSelected5(false);
    setNumberSelected("1");
  };
  const selectToggle2 = () => {
    setSelected1(false);
    setSelected2(true);
    setSelected3(false);
    setSelected4(false);
    setSelected5(false);
    setNumberSelected("2");
  };
  const selectToggle3 = () => {
    setSelected1(false);
    setSelected2(false);
    setSelected3(true);
    setSelected4(false);
    setSelected5(false);
    setNumberSelected("3");
  };
  const selectToggle4 = () => {
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    setSelected4(true);
    setSelected5(false);
    setNumberSelected("4");
  };
  const selectToggle5 = () => {
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    setSelected4(false);
    setSelected5(true);
    setNumberSelected("5");
  };

  const submitRating = () => {
    if (numberSelected === null) {
      window.alert("Please rate before continue");
    } else {
      setSubmtited(!submitted);
    }
  };

  useEffect(() => {
    console.log(submitted);
    console.log("you selected " + numberSelected + " out of 5");
  });

  return (
    <div className="App">
      <div className="container">
        {submitted === false ? (
          <div>
            {" "}
            <div className="icon-star">
              <img src={iconStar} alt="" />
            </div>
            <h2> How did we do?</h2>
            <div className="description">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </div>
            <div className="rating">
              <span
                onClick={selectToggle1}
                className={selected1 === true ? "number checked" : "number"}
              >
                1
              </span>
              <span
                onClick={selectToggle2}
                className={selected2 === true ? "number checked" : "number"}
              >
                2
              </span>
              <span
                onClick={selectToggle3}
                className={selected3 === true ? "number checked" : "number"}
              >
                3
              </span>
              <span
                onClick={selectToggle4}
                className={selected4 === true ? "number checked" : "number"}
              >
                4
              </span>
              <span
                onClick={selectToggle5}
                className={selected5 === true ? "number checked" : "number"}
              >
                5
              </span>
            </div>
            <button onClick={submitRating}> SUBMIT </button>
          </div>
        ) : (
          <div className="result-container">
            {" "}
            <div>
              <img src={iconThankYou} alt="" />
            </div>
            <div className="result">
              <span>{`You selected ${numberSelected} out of 5`}</span>
            </div>
            <h2> Thank you!</h2>
            <div className="description">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
