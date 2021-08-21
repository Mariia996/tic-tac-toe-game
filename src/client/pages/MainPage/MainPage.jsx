import { useState } from 'react';

import GameField from '../../components/GameField';
import Modal from '../../shared/components/Modal';
import PlayerModal from '../../components/PlayerModal';
import { PlayerProvider } from '../../shared/hooks/usePlayer';

import s from './MainPage.module.scss';

const MainPage = () => {
    const [openModal, setOpenModal] = useState(true)

    return (
    <PlayerProvider>
        <div className={s.container}>
            <h1 className={s.title}>Tic Tac Toe Game</h1>
            <div className={s.game_container}>
                <GameField />
            </div>
            <Modal onClose={() => setOpenModal(!openModal)} className={openModal ? s.modalIsOpen : ''}>
                <PlayerModal onClose={() => setOpenModal(!openModal)} />
            </Modal>
        </div>
    </PlayerProvider>);
};

export default MainPage;