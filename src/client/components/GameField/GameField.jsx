import { useState, useEffect, useRef } from 'react';
import GamePanel from '../GamePanel/GamePanel';
import Score from '../Score';
import Modal from '../../shared/components/Modal';
import WinnerModal from '../WinnerModal';
import DrawModal from '../DrawModal';
import circle from '../../icons/circle.png';
import cross from '../../icons/cross.png';
import { initialState } from './initialState';
import { usePlayer } from '../../shared/hooks/usePlayer';
import { check } from './check';
import s from './GameField.module.scss';

const GameField = () => {
    const [panel, setPanel] = useState(initialState);
    const { players } = usePlayer();
    const [currentPlayer, setcurrentPlayer] = useState(players.player1);

    const [openModal, setOpenModal] = useState(false);

    const winner = useRef('')
    const [idxCombination, setIdxCombination] = useState(null);

    const draw = useRef(false);

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
        setPanel(initialState);
        setcurrentPlayer(players.player1);
        winner.current = '';
        setIdxCombination(null);
        draw.current = false;
        setOpenModal(!openModal);
    }

    useEffect(() => {
        const {player, idx} = check(panel, cross, circle, players.player1, players.player2);
        if (player) {
            winner.current = player;
            setIdxCombination(idx);
            setTimeout(() => {
                setOpenModal(!openModal)
            }, 1500);
        }
         if (!panel.includes(null)) {
            draw.current = true;
            setTimeout(() => {
                setOpenModal(!openModal)
            }, 1500);
        };

    }, [panel, winner.current, draw])

    return (<div className={s.gameField}>
        <div className={s.gamePanel}>
            <GamePanel handleClick={(idx) => handleClick(idx)} panel={panel} idx={idxCombination}/>
        </div>
        <div className={s.score}>
            <Score currentPlayer={currentPlayer} winner={winner.current}/>
        </div>
        <Modal onClose={() => resetResults()} className={openModal ? s.modalIsOpen : ''}>
            {winner.current && <WinnerModal winner={winner.current} onClose={() => resetResults()} />}
            {draw.current && !winner.current && <DrawModal onClose={() => resetResults()} />}
        </Modal>
    </div> );
}

export default GameField;