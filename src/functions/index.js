// useful for debugging
// given a delta, print the human readble direction
const dir = (dr, dc) => {
  const rs = { '-1': 'up', '0': '', '1': 'down' };
  const cs = { '-1': 'left', '0': '', '1': 'right' };
  return (rs[dr] + ' ' + cs[dc]).trim();
};

// Recursive function to find "in a row" game pieces
const checkNext = (board, r, c, dr, dc) => {
  const nextR = r + dr;
  const nextC = c + dc;

  // if outside of gameboard, escape.
  if (!board[nextR] || !board[nextR][nextC]) return 0;

  const current = board[r][c];
  const next = board[nextR][nextC];
  return (current === next) ? 1 + checkNext(board, nextR, nextC, dr, dc) : 0;
};

export const checkForWin = (board, r, c) => {
  const deltas = [-1, 0, 1];

  // counter-clockwise check for 4+ pieces in a row
  for (const dr of deltas) {
    for (const dc of deltas) {
      if (!(dr || dc)) break; // skip delta, 0,0
      const inARow = checkNext(board, r, c, dr, dc) + checkNext(board, r, c, -1 * dr,-1 * dc);
      if (inARow >= 3) return board[r][c];
    }
  }
};
