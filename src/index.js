import React from "react";
import ReactDOM from "react-dom";
import ReactPhoneInput from "react-phone-input-2";

import "./styles.css";
import "react-phone-input-2/dist/style.css";

function App() {
  return (
    <div className="App">
      <h1>Accessible Phone Input with Country Code</h1>
      <h2>react-phone-input-2</h2>

      <div style={{ display: "inline-block", marginLeft: "40px" }}>
        <p>Auto country detect by value</p>
        <ReactPhoneInput />
        <p>Default US Country Code</p>
        <ReactPhoneInput
          country="us"
          regions={["north-america", "south-america", "central-america"]}
          preferredCountries={["mx", "cn", "us"]}
          placeholder={""}
          inputProps={{
            name: "phone number",
            required: true,
            autofocus: false
          }}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
