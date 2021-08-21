import PropTypes from 'prop-types';
import Button from '../../shared/components/Button';

import s from './WinnerModal.module.scss';

const WinnerModal = ({winner, onClose}) => {
    return (<div className={s.winner}>
        <h2 className={s.winner_title}>{winner} won the game!</h2>
        <Button className={s.winner_btn} onClick={onClose}>Continue</Button>
    </div> );
}

export default WinnerModal;

WinnerModal.defaultProps = {
    winner: '',
    onClose: () => {}
}

WinnerModal.propTypes = {
    winner: PropTypes.string,
    onClose: PropTypes.func
}