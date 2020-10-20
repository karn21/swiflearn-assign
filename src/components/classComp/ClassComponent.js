import React, { Component } from "react";
import Title from "../sectionTitle/Title";
import "./classComp.css";

class ClassComponent extends Component {
  render() {
    return (
      <section>
        <Title title="Live Classes"></Title>
        <div className="class-list">
          <ul className="list">
            <li className="cl active">3</li>
            <li className="cl">4</li>
            <li className="cl">5</li>
            <li className="cl">6</li>
            <li className="cl">7</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ClassComponent;
