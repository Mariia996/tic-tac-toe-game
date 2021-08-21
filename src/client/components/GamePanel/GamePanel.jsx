import { v4 } from 'uuid';
import PropTypes from 'prop-types';

import s from './GamePanel.module.scss';

const GamePanel = ({handleClick, panel }) => {
    return (<div className={s.panel}>
        <ul className={`${s.panel_boxesList} ${s.crosslineDiagonal}`}>
            <div className={`${s.line_container} ${s.crosslineHorizontal}`}>
                {panel[0].map((item, idx) => (
                    <li key={v4()} className={s.panel_boxes} onClick={() => handleClick(0, idx)}>{item}</li>
                ))}
            </div>
            <div className={`${s.line_container} ${s.crosslineHorizontal}`}>
                {panel[1].map((item, idx)=> (
                    <li key={v4()} className={s.panel_boxes} onClick={() => handleClick(1, idx)}>{item}</li>
                ))}
            </div>
            <div className={`${s.line_container} ${s.crosslineHorizontal}`}>
                {panel[2].map((item, idx) => (
                    <li key={v4()} className={s.panel_boxes} onClick={() => handleClick(2, idx)}>{item}</li>
                ))}
            </div>
        </ul>
    </div> );
}

export default GamePanel;

GamePanel.defaultProps = {
    handleClick: () => { },
    panel: []
}

GamePanel.propTypes = {
    handleClick: PropTypes.func,
    panel: PropTypes.array
}