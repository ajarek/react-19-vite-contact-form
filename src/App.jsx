import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/form/Form"

function App() {
  return (
    <div className="App">
      <h1>Get in touch!</h1>
      <p>Contact us for a quote,help ot to join the team</p>
      <div className="row">
        <div className="element">
          <span>🚩</span>
          <p>102 Street 2714 Don</p>
        </div>
        <div className="element">
          <span>📞</span>
          <p>+02 1234 567</p>
        </div>
        <div className="element">
          <span>✉️</span>
          <p>ajarek@poczta.onet.pl</p>
        </div>
      </div>
     <Form/>
    </div>
  );
}

export default App;
