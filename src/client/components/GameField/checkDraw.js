import { usePlayer } from '../../shared/hooks/usePlayer';

export const useCheckDraw = (panel, currentPlayer, cross, circle) => {
console.log("🚀 ~ file: checkDraw.js ~ line 4 ~ useCheckDraw ~ currentPlayer", currentPlayer)
    const { players } = usePlayer();

    const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

    let draw = false;
    let crossStepsLeft = false;
    let circleStepsLeft = false;



    for (let i = 0; i < winCombinations.length; i++) {
        for (let j = 0; j < winCombinations[i].length; j++) {
            winCombinations[i].splice(j, 1, panel[winCombinations[i][j]])
        }
    }

    for (let i = 0; i < winCombinations.length; i++) {
        for (let j = 0; j < winCombinations[i].length; j++) {
            if (winCombinations[i][j] === null) {
                winCombinations[i].splice(j, 1, cross)
                if (panel[winCombinations[i][0]] === cross && panel[winCombinations[i][1]] === cross && panel[winCombinations[i][2]] === cross) {
                    winCombinations[i].splice(j, 1, null)
                    return
                } else {
                    winCombinations[i].splice(j, 1, null)
                    draw = true
                }
            }
        }
    }

    // if (currentPlayer === players.player1) {
    //     crossStepsLeft = winCombinations.some(item => {
    //         return item.some(s => s === null || s !== circle)
    //     })
    // }

    // if (currentPlayer === players.player2) {
    //     circleStepsLeft = winCombinations.some(item => {
    //         return item.some(s => s === null || s !== cross)
    //     })
    // }


    // console.log('matrix', winCombinations)


    console.log("🚀 crossStepsLeft", crossStepsLeft)
    console.log("🚀 circleStepsLeft", circleStepsLeft)

    if (crossStepsLeft === false && circleStepsLeft === false) {
        draw = true;
    };

    // for (let i = 0; i < winCombinations.length; i++) {
    //     if (currentPlayer === players.player1) {
    //         if (panel[winCombinations[i][0]] !== null && panel[winCombinations[i][1]] !== null && panel[winCombinations[i][2]] !== null) {
    //             draw = true;
    //         }
    //     } else if (currentPlayer === players.player2) {
    //         if (panel[winCombinations[i][0]] !== null && panel[winCombinations[i][1]] !== null && panel[winCombinations[i][2]] !== null) {
    //             draw = true;
    //         }
    //     }
    // };



    return draw;

};

// for (let i = 0; i < winCombinations.length; i++) {
    //     for (let j = 0; j < newPanel.length; j++) {
    //         if (newPanel[j] === null) {
    //                                     console.log('newPanel[j]', `j = ${j}`, newPanel[j]);
    //             newPanel.splice(j, 1, cross)
    //                                     console.log('newPanel[j]', `j = ${j}`, newPanel[j]);
    //             if (panel[winCombinations[i][0]] === cross && panel[winCombinations[i][1]] === cross && panel[winCombinations[i][2]] === cross) {
    //                 newPanel.splice(j, 1, null)
    //                                     console.log('newPanel[j]', `j = ${j}`, newPanel[j]);

    //             } else { crossStepsLeft = true; return  }
    //             }
    //     }


    //     for (let j = 0; j < newPanel.length; j++) {
    //         if (newPanel[j] === null) {
    //             newPanel.splice(j, 1, circle)
    //                 if (panel[winCombinations[i][0]] === circle && panel[winCombinations[i][1]] === circle && panel[winCombinations[i][2]] === circle) {
    //                 newPanel.splice(j, 1, null)
    //             } else { crossStepsLeft = true }
    //         }
    //     }
    // }