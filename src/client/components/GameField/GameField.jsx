import { useState } from 'react';
import GamePanel from '../GamePanel/GamePanel';
import Score from '../Score';
import { ReactComponent as Circle } from '../../icons/circle.svg';
import { ReactComponent as Cross } from '../../icons/cross.svg';
import { usePlayer } from '../../shared/hooks/usePlayer';
import { check } from './check';

import s from './GameField.module.scss';
// <Cross />
const GameField = () => {
    const [panel, setPanel] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);

    const { players } = usePlayer()
    const [currentPlayer, setcurrentPlayer] = useState(players.player1)

    const handleClick = (stateIdx, arrIdx) => {
        const newPanel = [...panel]
        if (currentPlayer === players.player1) {
            newPanel[stateIdx].splice(arrIdx, 1, <Cross />)
            setPanel(newPanel)
            setcurrentPlayer(players.player2)
        } else {
            newPanel[stateIdx].splice(arrIdx, 1, <Circle />)
            setPanel(newPanel)
            setcurrentPlayer(players.player1)
        }
        check(panel, <Cross />, <Circle />)

    }

    return (<div className={s.gameField}>
        <div className={s.gamePanel}>
            <GamePanel handleClick={(stateIdx, arrIdx) => handleClick(stateIdx, arrIdx)} panel={panel}/>
        </div>
        <div className={s.score}>
            <Score currentPlayer={currentPlayer}/>
        </div>
    </div> );
}

export default GameField;