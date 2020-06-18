import React from "react";
import "./Loading.css";

export default function Loading(props) {
  return (
    <div className="ui segmentf full-height">
      <div className="ui active dimmer">
        <div className="ui massive text loader ">
          <h3>{props.message}</h3>
        </div>
      </div>
    </div>
  );
}

Loading.defaultProps = {
  message: "Loading...",
};
