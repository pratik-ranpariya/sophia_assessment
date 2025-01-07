import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Project ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Project Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Start Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">End Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Project Manager</th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
        </thead>
    );
};

export default TableHeader;