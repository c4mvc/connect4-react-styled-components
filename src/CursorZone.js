import React, { Component } from "react";
import { playerType } from "./constants";

class CursorZone extends Component {
  render() {

    console.log("this.props.gameCursor", this.props.gameCursor);

    return (
      <div className="bottom-buffer">
        <div className="clearfix area-width">
          {this.props.gameCursor.map((cursor, index) => {
            return (
              <div
                className="cursor-area"
                onMouseOver={() => this.props.moveCursor(cursor)}
                onClick={() => this.props.dropDiscToZone(cursor)}
              >
                <div style={{ verticalAlign: "middle" }}>
                  {cursor.player === playerType.One && (
                    <div className="circleBase circle-red" />
                  )}
                  {cursor.player === playerType.Two && (
                    <div className="circleBase circle-yellow" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CursorZone;
