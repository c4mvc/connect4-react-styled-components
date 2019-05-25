import React, { Component } from "react";
import styled from "styled-components";
import { CircleRed, CircleYellow } from "./styles";

const AnimatedCircleRed = styled(CircleRed)`
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 55;
  @keyframes example {
    from {
      border-color: yellow;
    }
    to {
      border-color: red;
    }
  }
`;

const AnimatedCircleYellow = styled(CircleYellow)`
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 55;
  @keyframes example {
    from {
      border-color: red;
    }
    to {
      border-color: yellow;
    }
  }
`;

export default class PlayerLabel extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h3>Player1</h3>
          <AnimatedCircleRed />
        </div>
        <div className="col-md-3">
          <h3>Player2</h3>
          <AnimatedCircleYellow />
        </div>
      </div>
    );
  }
}
