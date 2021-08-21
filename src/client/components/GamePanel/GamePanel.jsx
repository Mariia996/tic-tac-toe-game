import PropTypes from 'prop-types';
import { classNames } from './classNames';

import s from './GamePanel.module.scss';

const GamePanel = ({ handleClick, panel, idx }) => {

    return (<div className={s.panel}>
        <ul className={`${s.panel_boxesList} ${idx ? classNames[idx] : ''}`}>
            {panel.map((item, idx) => (<div key={idx} className={s.line_container}>
                <li className={s.panel_boxes} onClick={() => handleClick(idx)}>
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
}

GamePanel.propTypes = {
    handleClick: PropTypes.func,
    panel: PropTypes.array,
}