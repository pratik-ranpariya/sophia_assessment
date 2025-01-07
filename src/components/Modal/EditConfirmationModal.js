import React from 'react';
import ModalDialog from './ModalDialog';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';

const EditConfirmationModal = ({ open, onClose, onConfirm, projectName }) => {
    return (
        <ModalDialog open={open} onClose={onClose}>
            <ModalContent projectName={projectName} />
            <ModalActions onCancel={onClose} onConfirm={onConfirm} />
        </ModalDialog>
    );
};

export default EditConfirmationModal;
