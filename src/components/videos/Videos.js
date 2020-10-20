import React from "react";
import Title from "../sectionTitle/Title";
import "./videos.css";

function Videos(props) {
  return (
    <section className="videos-section">
      <Title title="Concept Videos"></Title>
      <div className="slide-show">
        <div className="arrow arrow-prev" onClick={props.prevLecture}>
          <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
        </div>
        <div className="video-carousel">
          <div className="video-container">
            <div className="video-previous">
              <div className="video-thumbnail">
                <div className="play-btn">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container">
            <div className="video-current">
              <div className="video-thumbnail">
                <div className="play-btn">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </div>
              </div>
              <div className="video-title">
                <p>{props.currentLecture}</p>
              </div>
            </div>
          </div>
          <div className="video-container">
            <div className="video-next">
              <div className="video-thumbnail">
                <div className="play-btn">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow arrow-next">
          <i
            className="fa fa-chevron-circle-right"
            aria-hidden="true"
            onClick={props.nextLecture}
          ></i>
        </div>
      </div>
    </section>
  );
}

export default Videos;
