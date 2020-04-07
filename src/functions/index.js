const checkNext = (board, r, c, dr, dc) => {
  const nextR = r + dr;
  const nextC = c + dc;

  if (!board[nextR] || !board[nextR][nextC]) return 0;

  const current = board[r][c];
  const next = board[nextR][nextC];
  return (current === next) + checkNext(board, nextR, nextC, dr, dc);
}

export const checkForWin = (board, r, c) => {
  const deltas = [-1, 0, 1];

  for (const dr of deltas) {
    for (const dc of deltas) {
      if (!(dr || dc)) break; // skip delta, 0,0
      // console.log(checkNext(board, r, c, dr, dc))
      if (checkNext(board, r, c, dr, dc) >= 3) return board[r][c];
    }
  }
}
