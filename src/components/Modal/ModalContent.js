import React from 'react';
import { Typography } from '@mui/material';

const ModalContent = ({ projectName }) => {
    return (
        <>
            <Typography variant="h6" component="h2">
                Confirm Edit
            </Typography>
            <Typography sx={{ mt: 2 }}>
                Are you sure you want to edit the project: <strong>{projectName}</strong>?
            </Typography>
        </>
    );
};

export default ModalContent;