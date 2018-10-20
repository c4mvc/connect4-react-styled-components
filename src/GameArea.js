import React, { PureComponent, Component } from "react";
import CursorZone from "./CursorZone";
import GameZone from "./GameZone";

class GameArea extends Component {
  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-xs-9">
            <CursorZone
              gameCursor={this.props.gameCursor}
              moveCursor={this.props.moveCursor}
              dropDiscToZone={this.props.dropDiscToZone}
            />

            <GameZone gameZone={this.props.gameZone} />
          </div>
        </div>
      </div>
    );
  }
}

export default GameArea;
