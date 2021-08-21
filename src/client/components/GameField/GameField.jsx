import { useState, useEffect } from 'react';
import GamePanel from '../GamePanel/GamePanel';
import Score from '../Score';
import Modal from '../../shared/components/Modal';
import circle from '../../icons/circle.png';
import cross from '../../icons/cross.png';
import { initialState } from './initialState';
import { usePlayer } from '../../shared/hooks/usePlayer';
import { check } from './check';
import s from './GameField.module.scss';

const GameField = () => {
    const [panel, setPanel] = useState(initialState);
    const [winner, setWinner] = useState('')

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

    useEffect(() => {
        const player = check(panel, cross, circle, players.player1, players.player2);
        if (player) {
            setWinner(player);
            setOpenModal(!openModal);
            setPanel(initialState);
        }
    }, [panel, players, openModal])


    return (<div className={s.gameField}>
        <div className={s.gamePanel}>
            <GamePanel handleClick={(idx) => handleClick(idx)} panel={panel}/>
        </div>
        <div className={s.score}>
            <Score currentPlayer={currentPlayer} winner={winner}/>
        </div>
        <Modal onClose={() => setOpenModal(!openModal)} className={openModal ? s.modalIsOpen : ''}>

        </Modal>
    </div> );
}

export default GameField;