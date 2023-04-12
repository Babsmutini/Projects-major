import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import useFetch from "./utilities/useFetch";

function App() {

  return (
    
    <div className="App">
        {/* <h1>{process.env.REACT_APP_API_KEY}</h1> */}
        <Layout/>
    </div>
  );
}

export default App;
