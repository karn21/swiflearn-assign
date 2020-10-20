import React from "react";
import { Link } from "react-router-dom";
import "./pagecontent.css";

function PageContent(props) {
  return (
    <section className="page-content">
      {props.title ? (
        <h1>This is {props.title} Page</h1>
      ) : (
        <h1>Error 404... Not Found!</h1>
      )}

      <h3>
        <Link to="/">Click here</Link> to go back
      </h3>
    </section>
  );
}

export default PageContent;
