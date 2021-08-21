import { usePlayer } from '../../shared/hooks/usePlayer';
import s from './Score.module.scss';

const Score = ({ currentPlayer }) => {
    const { players } = usePlayer();

    return (
    <div className={s.score}>
        <p className={s.score_text}>Score</p>
        <p className={currentPlayer === players.player1 ? s.currentPlayer : s.score_player}>{players.player1}:</p>
        <p className={currentPlayer === players.player2 ? s.currentPlayer : s.score_player}>{players.player2}:</p>
    </div>
 );
}

export default Score;