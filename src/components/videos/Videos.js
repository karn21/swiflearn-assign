import React, { Component } from "react";
import "./videos.css";

class Videos extends Component {
  render() {
    return (
      <section className="videos-section">
        <h1>Concept Videos</h1>
        <p>Select a number</p>
        <div className="slide-show">
          <div className="arrow arrow-prev">
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
          </div>
          <div className="video-carousel">
            <div className="video-container">
              <div className="video-previous">
                <div className="video-thumbnail">
                  <div className="play-btn">
                    <i class="fa fa-caret-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="video-container">
              <div className="video-current">
                <div className="video-thumbnail">
                  <div className="play-btn">
                    <i class="fa fa-caret-right" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="video-title">
                  <p>See What Leena Barua thinks about this.</p>
                </div>
              </div>
            </div>
            <div className="video-container">
              <div className="video-next">
                <div className="video-thumbnail">
                  <div className="play-btn">
                    <i class="fa fa-caret-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="arrow arrow-next">
            <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
          </div>
        </div>
      </section>
    );
  }
}

export default Videos;
