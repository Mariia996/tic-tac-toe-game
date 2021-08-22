import PropTypes from 'prop-types';
import Button from '../../shared/components/Button';

import s from './DrawModal.module.scss';

const DrawModal = ({onClose}) => {
    return (<div className={s.draw}>
        <p className={s.draw_text}>No moves left.</p>
        <Button onClick={onClose} className={s.draw_btn}>Continue</Button>
    </div> );
}

export default DrawModal;

DrawModal.defaultProps = {
    handleClick: () => {}
}

DrawModal.propTypes = {
    handleClick: PropTypes.func
}
