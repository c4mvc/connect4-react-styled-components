let consicutiveHorizontally = 0;
let consicutiveVertically = 0;

const checkHorizontally = function({
  totalRows,
  totalColumns,
  gameZone,
  currentPlayer
}) {
  for (let row = 0; row < totalRows; row++) {
    consicutiveHorizontally = 0;
    for (let col = 0; col < totalColumns; col++) {
      const cell = gameZone[row][col];
      if (cell.player === currentPlayer) {
        consicutiveHorizontally++;
      } else {
        consicutiveHorizontally = 0;
      }
      if (consicutiveHorizontally > 3) {
        return true;
      }
    }
  }
  return false;
};

const checkVertically = function({
  totalRows,
  totalColumns,
  gameZone,
  currentPlayer
}) {
  for (let col = 0; col < totalColumns; col++) {
    consicutiveVertically = 0;
    for (let row = 0; row < totalRows; row++) {
        const cell = gameZone[row][col];
      if (cell.player === currentPlayer) {
        consicutiveVertically++;
      } else {
        consicutiveVertically = 0;
      }
      if (consicutiveVertically > 3) {
        return true;
      }
    }
  }
  return false;
};

const checkDiagonally = function({
  totalRows,
  totalColumns,
  gameZone,
  currentPlayer
}) {
  for (let row = 0; row < totalRows; row++) {
    consicutiveHorizontally = 0;
    for (let col = 0; col < totalColumns; col++) {
      for (
        let x = row, y = col, length = 0;
        x < totalRows && y < totalColumns;
        x++, y++
      ) {
        const cell = gameZone[x][y];
        if (cell.player === currentPlayer) {
          length++;
        } else {
          length = 0;
        }
        if (length > 3) {
          return true;
        }
      }

      for (
        let x = row, y = totalColumns - col - 1, length = 0;
        x < totalRows && y >= 0;
        x++, y--
      ) {
        const cell = gameZone[x][y];

        if (cell.player === currentPlayer) {
          length++;
        } else {
          length = 0;
        }
        if (length > 3) {
          return true;
        }
      }
    }
  }
  return false;
};

const checkWin = function({
  totalRows,
  totalColumns,
  gameZone,
  currentPlayer
}) {
  if (
    checkHorizontally({ totalRows, totalColumns, gameZone, currentPlayer }) ||
    checkVertically({ totalRows, totalColumns, gameZone, currentPlayer }) ||
    checkDiagonally({ totalRows, totalColumns, gameZone, currentPlayer })
  ) {
    return true;
  }
  return false;
};

export default checkWin;
