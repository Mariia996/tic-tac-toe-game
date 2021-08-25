import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/components/Button';
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
                <input id="player_name" type="text" value={idx === 0 ? formData.player1 : formData.player2} name={fields[idx].name} onChange={handleChange} className={s.inputField} />
                <Button type="submit" onClick={handleClick}>Submit</Button>
            </form>
        </div>);
};

export default PlayerModal;

PlayerModal.defaultProps = {
    onClose: () => {}
}

PlayerModal.propTypes = {
    onClose: PropTypes.func
}