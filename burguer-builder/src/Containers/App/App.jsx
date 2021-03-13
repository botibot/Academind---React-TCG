import React, { Component } from "react";
import Layout from "../../Components/Layout/Layout";
import BurguerBuilder from "../BurguerBuilder/BurguerBuilder";
// import cssmod from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuilder />
        </Layout>
      </div>
    );
  }
}

// function App() {
//   return <div className={cssmod.App}></div>;
// }

export default App;
