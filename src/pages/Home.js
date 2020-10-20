import React, { Component } from "react";
import ClassComponent from "../components/classComp/ClassComponent";
import Videos from "../components/videos/Videos";

class Home extends Component {
  render() {
    return (
      <>
        <Videos></Videos>
        <ClassComponent></ClassComponent>
      </>
    );
  }
}

export default Home;
