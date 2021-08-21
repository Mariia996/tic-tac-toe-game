import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { usePlayer } from '../../shared/hooks/usePlayer';
import s from './Score.module.scss';

const Score = ({ currentPlayer, winner }) => {
    const { players } = usePlayer();
    const [player1Score, setPlayer1Score] = useState(0)
    const [player2Score, setPlayer2Score] = useState(0)

    useEffect(() => {
        if (winner === players.player1) {
            setPlayer1Score(prev => prev + 1)
        } else if (winner === players.player2) {
            setPlayer2Score(prev => prev + 1)
        }
    }, [winner, players])

    return (
    <div className={s.score}>
        <p className={s.score_text}>Score</p>
        <p className={currentPlayer === players.player1 ? s.currentPlayer : s.score_player}>{players.player1}:  {player1Score}</p>
        <p className={currentPlayer === players.player2 ? s.currentPlayer : s.score_player}>{players.player2}:  {player2Score}</p>
    </div>
 );
}

export default Score;

Score.defaultProps = {
    currentPlayer: '',
    winner: ''
}

Score.propTypes = {
    currentPlayer: PropTypes.string,
    winner: PropTypes.string
}