import React, { Component } from "react";
import { CircleRed, CircleYellow } from "./styles";

export default class PlayerLabel extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h3>Player1</h3>
          <CircleRed />
        </div>
        <div className="col-md-3">
          <h3>Player2</h3>
          <CircleYellow />
        </div>
      </div>
    );
  }
}
