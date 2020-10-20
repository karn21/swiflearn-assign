import React, { Component } from "react";
import ClassComponent from "../components/classComp/ClassComponent";
import Videos from "../components/videos/Videos";
import { data } from "../CourseData";

class Home extends Component {
  state = {
    currentClass: 5,
    currentLecture: 0,
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

  // get next lecture
  nextLecture = () => {
    var index = this.state.currentLecture;
    if (index === this.state.lectures.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
    this.setState({
      currentLecture: index,
    });
  };

  // get previous lecture
  prevLecture = () => {
    var index = this.state.currentLecture;
    if (index === 0) {
      index = this.state.lectures.length - 1;
    } else {
      index -= 1;
    }
    this.setState({
      currentLecture: index,
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
        <Videos
          currentLecture={this.state.lectures[this.state.currentLecture]}
          nextLecture={this.nextLecture}
          prevLecture={this.prevLecture}
        ></Videos>
        <ClassComponent
          currentClass={this.state.currentClass}
          changeClass={this.changeCurrentClass}
        ></ClassComponent>
      </>
    );
  }
}

export default Home;
