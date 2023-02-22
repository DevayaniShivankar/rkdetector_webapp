import React, { useState, useEffect } from "react";
import './App.css';

import Header from "./UI/Header.js";
import Container from "./UI/Container.js";
import Footer from "./UI/Footer.js";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
     
     <Header/>
      <Container />
      {/* <h1>{message}</h1> */}
      <Footer />
    </div>
  );
}

export default App;
