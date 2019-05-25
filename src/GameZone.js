import React, { Component } from "react";
import { playerType } from "./constants";
import { CircleRed, CircleYellow } from "./styles";

class GameZone extends Component {
  render() {
    return (
      <div>
        {this.props.gameZone.map((row, index) => {
          return (
            <div key={index} className="clearfix area-width">
              {row.map((cell, i) => {
                return (
                  <div className="box-cell">
                    {cell.player === playerType.One && (
                      <CircleRed />
                    )}
                    {cell.player === playerType.Two && (
                      <CircleYellow />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default GameZone;
