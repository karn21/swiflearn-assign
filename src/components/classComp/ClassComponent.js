import React from "react";
import Title from "../sectionTitle/Title";
import "./classComp.css";
import { cl } from "../../CourseData";

function ClassComponent(props) {
  return (
    <section>
      <Title title="Live Classes"></Title>
      <div className="class-list">
        <ul className="list">
          {cl.map((classNo) => {
            if (classNo === props.currentClass) {
              return (
                <li
                  className="cl active"
                  key={classNo}
                  onClick={() => props.changeClass(classNo)}
                >
                  {classNo}
                </li>
              );
            } else {
              return (
                <li
                  className="cl"
                  key={classNo}
                  onClick={() => props.changeClass(classNo)}
                >
                  {classNo}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}

export default ClassComponent;
