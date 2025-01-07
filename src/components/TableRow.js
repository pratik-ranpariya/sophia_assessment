import React, { useState } from 'react';
import EditConfirmationModal from './Modal/EditConfirmationModal';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../common/commonFunctions';

const TableRow = ({ project }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleConfirmEdit = () => {
        navigate(`/project/${project.projectId}`);
        handleClose();
    };

    return (
        <>
            <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">{project.projectId}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{project.projectName}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{formatDate(project.startDate)}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{formatDate(project.endDate)}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{project.projectManager}</td>
                <td className="px-4 py-2 text-center">
                    <button
                        className="px-4 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                        onClick={handleOpen}
                    >
                        Edit
                    </button>
                </td>
            </tr>
            <EditConfirmationModal 
                open={open} 
                onClose={handleClose} 
                onConfirm={handleConfirmEdit} 
                projectName={project.projectName} 
            />
        </>
    );
};

export default TableRow;