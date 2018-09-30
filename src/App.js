import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

const playerType = {
  One: 1,
  Two: 2,
  None: 0
};

const totalRows = 6;
const totalColumns = 7;

function gameZoneCell(player, rowIndex, columnIndex) {
  this.player = player;
  this.rowIndex = rowIndex;
  this.columnIndex = columnIndex;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameZone: [],
      currentRow: undefined,
      currentColumn: undefined,
      currentPlayer: playerType.One,
      gameCursor: new Array(totalColumns)
    };
  }

  buildGameZone() {
    let gameZone = [];
    for (var row = 0; row < totalRows; row++) {
      gameZone[row] = new Array();
      for (var column = 0; column < totalColumns; column++) {
        gameZone[row].push(new gameZoneCell(playerType.None, row, column));
      }
    }
    return gameZone;
  }

  componentDidMount() {
    const gameZone = this.buildGameZone();
    this.setState({ gameZone: gameZone });
  }

  // buildGameZone();

  render() {
    return (
      <div className="container">
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
              {/* <div className="bottom-buffer">
                <div className="clearfix area-width">
                  <div
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
                  </div>
                </div>
              </div> */}

              <div>
                

                {/* <div
                  className="clearfix area-width"
                  ng-repeat="row in gameZone"
                >
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
