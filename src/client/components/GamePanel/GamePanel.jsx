import PropTypes from 'prop-types';

import s from './GamePanel.module.scss';

const classNames = [
    s.crosslineHorizontal_1,
    s.crosslineHorizontal_2,
    s.crosslineHorizontal_3,
    s.crosslineVertical_1,
    s.crosslineVertical_2,
    s.crosslineVertical_3,
    s.crosslineDiagonal_1,
    s.crosslineDiagonal_2,

]

const GamePanel = ({ handleClick, panel, idx }) => {
console.log("🚀 ~ file: GamePanel.jsx ~ line 7 ~ GamePanel ~ idx", classNames[idx])

    return (<div className={s.panel}>
        <ul className={`${s.panel_boxesList} ${idx ? classNames[idx] : ''}`}>
            {panel.map((item, idx) => (
            <div key={idx} className={s.line_container} onClick={() => handleClick(idx)}>
                <li className={s.panel_boxes} >
                    <img src={item} alt="" className={s.img} width="60" />
                </li>
            </div>))}
        </ul>
    </div> );
}

export default GamePanel;

GamePanel.defaultProps = {
    handleClick: () => { },
    panel: [],
    idx: null
}

GamePanel.propTypes = {
    handleClick: PropTypes.func,
    panel: PropTypes.array,
}