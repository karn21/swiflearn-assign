import React, { Component } from "react";
import ClassComponent from "../components/classComp/ClassComponent";
import Videos from "../components/videos/Videos";
import { data } from "../CourseData";

class Home extends Component {
  state = {
    currentClass: 5,
    lectures: [],
  };

  // get initial lectures
  componentDidMount() {
    this.getLectures();
  }

  // get current class lectures
  getLectures = () => {
    const lectures = data.filter(
      (lecture) => lecture.classNo === this.state.currentClass
    );
    this.setState({
      lectures: lectures[0].videos,
    });
  };

  // change current class
  changeCurrentClass = (cl) => {
    this.setState(
      {
        currentClass: cl,
      },
      () => {
        this.getLectures();
      }
    );
  };

  render() {
    return (
      <>
        <Videos lectures={this.state.lectures}></Videos>
        <ClassComponent
          currentClass={this.state.currentClass}
          changeClass={this.changeCurrentClass}
        ></ClassComponent>
      </>
    );
  }
}

export default Home;
