import { useState } from 'react';
import { fields } from '../../assets/playerFields'
import { usePlayer } from '../../shared/hooks/usePlayer';

import s from './PlayerModal.module.scss';

const PlayerModal = ({onClose}) => {
    const [idx, setIdx] = useState(0);
    const { formData, handleSubmit, handleChange } = usePlayer();

    const handleClick = () => {
        idx === fields.length - 1 ? onClose() : setIdx(prev => prev + 1)
    }

    return (
        <div className={s.form_container}>
            <h2 className={s.title}>Welcome to Tic Tac Toe Game!</h2>
            <form className={s.form} onSubmit={handleSubmit}>
                <label htmlFor="player_name" className={s.label}>Select name for {fields[idx].text}</label>
                <input id="player_name" type="text" value={idx === 1 ? formData.player2 : formData.player1} name={fields[idx].name} onChange={handleChange} className={s.inputField} />
                <button type="submit" className={s.btn} onClick={handleClick}>Submit</button>
            </form>
        </div>);
};

export default PlayerModal;