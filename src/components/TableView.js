
import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const TableView = ({projects}) => {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <TableHeader />
                <tbody>
                    {projects.length > 0 && projects.map((project) => (
                        <TableRow key={project.id} project={project} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableView;