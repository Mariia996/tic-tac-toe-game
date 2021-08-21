import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from '../../../icons/close.svg';

import s from './Modal.module.scss';

const Modal = ({ children, onClose, className }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleKeyDown = useCallback(
        (e) => {
            if (e.code === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };


    const modalRoot = document.querySelector('#modal-root');
    return (
        createPortal(<div className={`${s.backdrop} ${className}`} onClick={handleBackdropClick}>
            <div className={s.modalLayout}>
                <div className={s.modalContent}>
                    <CloseIcon className={s.closeBtnIcon} onClick={onClose}/>
                    {children}
                </div>
            </div>
        </div>, modalRoot)
     );
}

export default Modal;

Modal.defaultProps = {
    className: '',
    onClose: () => { }
}

Modal.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func
}