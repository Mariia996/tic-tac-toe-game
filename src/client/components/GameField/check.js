export const check = (matrix, cross, circle) => {
    const winnerIdxArr = [
        [0, 1, 2],
        [0, 0, 0],
        [1, 1, 1],
        [2, 2, 2]
    ]
    // [null, null, null]
    // null
    let winner = '';
    // for (let i = 0; i < matrix.length; i++) {
    //     console.log(winnerIdxArr[0][0]);
    //     switch (i) {
    //         case matrix[i][winnerIdxArr[0][0]] === cross && matrix[i][winnerIdxArr[0][1]] === cross && matrix[i][winnerIdxArr[0][2]] === cross:
    //             winner = 'player 1';
    //             break;
    //         default:
    //             break;
    //     }
    // }

    for (let i = 0; i < winnerIdxArr.length; i++) {
        if (matrix[0][winnerIdxArr[i][0]] === cross && matrix[0][winnerIdxArr[i][1]] === cross && matrix[0][winnerIdxArr[i][2]] === cross) {

        }
    }
    console.log(winner);
}