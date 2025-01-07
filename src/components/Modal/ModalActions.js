import React from 'react';
import { Button, Box } from '@mui/material';

const ModalActions = ({ onCancel, onConfirm }) => {
    return (
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={onCancel} sx={{ mr: 1 }}>
                Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={onConfirm}>
                Confirm
            </Button>
        </Box>
    );
};

export default ModalActions;
