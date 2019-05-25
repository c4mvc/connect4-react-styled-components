import React, { Component } from "react";
import { playerType } from "./constants";
import { CircleRed, CircleYellow } from "./styles";

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
                    <CircleRed />
                  )}
                  {cursor.player === playerType.Two && (
                    <CircleYellow />
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
