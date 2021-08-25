export const check = (panel, cross, circle, player1, player2) => {
    const winnerIdxArr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let player = '';
    let idx = null;

    for (let i = 0; i < winnerIdxArr.length; i++) {
        if (panel[winnerIdxArr[i][0]] === cross && panel[winnerIdxArr[i][1]] === cross && panel[winnerIdxArr[i][2]] === cross) {
            idx = i + 1;
            player = player1;
        } else if (panel[winnerIdxArr[i][0]] === circle && panel[winnerIdxArr[i][1]] === circle && panel[winnerIdxArr[i][2]] === circle) {
            idx = i + 1;
            player = player2;
        }
    };

    return { player, idx };
};