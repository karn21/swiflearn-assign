import React from "react";
import Title from "../sectionTitle/Title";
import background from "../../img/video.jpg";
import { Carousel } from "react-bootstrap";
import "./videos.css";

function Videos(props) {
  return (
    <section className="videos-section">
      <Title title="Concept Videos"></Title>
      <Carousel>
        {props.lectures.map((lecture) => (
          <Carousel.Item>
            <img
              src={background}
              className="video-placeholder img-responsive"
              alt=""
            />
            <Carousel.Caption>
              <h3>{lecture}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Videos;
