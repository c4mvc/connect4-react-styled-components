import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div classNameName="container">
        <div className="row">
          <h1 className="game-header">Connect4 Game</h1>
        </div>

        <div className="row">
          <button className="btn-danger btn-lg" ng-click="startNewGame()">
            New Game
          </button>
          <button className="btn-primary btn-sm" ng-click="undoLastMove()">
            Undo
          </button>
          <button className="btn-success btn-sm" ng-click="replayGame()">
            Replay
          </button>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h3>Player1</h3>
            <div className="circleBase circle-red-small" />
          </div>
          <div className="col-md-3">
            <h3>Player2</h3>
            <div className="circleBase circle-yellow-small" />
          </div>
        </div>

        <div className="row">
          <div className="row">
            <div className="col-xs-9">
              <div className="bottom-buffer">
                <div className="clearfix area-width">
                  {/* <div
                    className="cursor-area"
                    ng-mouseover="moveCursor(cursor)"
                    ng-click="dropDiscToZone(cursor)"
                    ng-repeat="cursor in gameCursor"
                  >
                    <div style="vertical-align: middle">
                      <div
                        className="circleBase circle-red"
                        ng-if="cursor.player === playerType.One"
                      />
                      <div
                        className="circleBase circle-yellow"
                        ng-if="cursor.player === playerType.Two"
                      />
                    </div>
                  </div> */}
                </div>
              </div>

              <div>
                {/* <div className="clearfix area-width" ng-repeat="row in gameZone">
                  <div ng-repeat="cell in row" className="box-cell">
                    <div>
                      <div
                        className="circleBase circle-red"
                        ng-if="cell.player === playerType.One"
                      />
                      <div
                        className="circleBase circle-yellow"
                        ng-if="cell.player === playerType.Two"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
