import React, { PureComponent } from "react";

class Buttons extends PureComponent {
  render() {
    return (
      <div className="row">
        <button className="btn-danger btn-lg" onClick={this.props.startNewGame}>
          New Game
        </button>
        <button
          className="btn-primary btn-sm"
          onClick={this.props.undoLastMove}
        >
          Undo
        </button>
        <button className="btn-success btn-sm" onClick={this.props.replayGame}>
          Replay
        </button>
      </div>
    );
  }
}

export default Buttons;
