import { useState, useEffect } from 'react';
import GamePanel from '../GamePanel/GamePanel';
import Score from '../Score';
import Modal from '../../shared/components/Modal';
import WinnerModal from '../WinnerModal';
import circle from '../../icons/circle.png';
import cross from '../../icons/cross.png';
import { initialState } from './initialState';
import { usePlayer } from '../../shared/hooks/usePlayer';
import { check } from './check';
import s from './GameField.module.scss';

const GameField = () => {
    const [panel, setPanel] = useState(initialState);
    const [winner, setWinner] = useState('')
    const [idxCombination, setIdxCombination] = useState(null)

    const { players } = usePlayer()
    const [currentPlayer, setcurrentPlayer] = useState(players.player1);

    const [openModal, setOpenModal] = useState(false)

    const handleClick = (idx) => {
        if (currentPlayer === players.player1 && panel[idx] !== circle && panel[idx] !== cross) {
            setPanel(prev => {
                const arr = [...prev];
                arr.splice(idx, 1, cross);
                return arr;
            });
            setcurrentPlayer(players.player2);

        } else if (currentPlayer === players.player2 && panel[idx] !== circle && panel[idx] !== cross) {
            setPanel(prev => {
                const arr = [...prev];
                arr.splice(idx, 1, circle);
                return arr;
            });
            setcurrentPlayer(players.player1);
        };

    }

    const resetResults = () => {
        setPanel(initialState)
        setcurrentPlayer(players.player1)
        setWinner('')
        setIdxCombination(null)
        setOpenModal(!openModal)
    }

    useEffect(() => {
        const {player, idx} = check(panel, cross, circle, players.player1, players.player2);
        console.log("🚀 ~ file: GameField.jsx ~ line 53 ~ useEffect ~ player", player)
        if (player) {
            setWinner(player);
            setIdxCombination(idx);
            setTimeout(() => {
                setOpenModal(!openModal)
            }, 2000);
        }
    }, [winner, panel, players])


    return (<div className={s.gameField}>
        <div className={s.gamePanel}>
            <GamePanel handleClick={(idx) => handleClick(idx)} panel={panel} idx={idxCombination}/>
        </div>
        <div className={s.score}>
            <Score currentPlayer={currentPlayer} winner={winner}/>
        </div>
        <Modal onClose={() => resetResults()} className={openModal ? s.modalIsOpen : ''}>
            <WinnerModal winner={winner} onClose={() => resetResults()} />
        </Modal>
    </div> );
}

export default GameField;