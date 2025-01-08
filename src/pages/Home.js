
import React from 'react';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';

const Home = ({project, loading}) => {

    return (
        <div className="overflow-x-auto">
            {loading ? 
                "Loading..."
            : <table className="min-w-full bg-white border border-gray-200">
                <TableHeader />
                <tbody>
                    {project.length > 0 && project.map((_d) => (
                        <TableRow key={_d.id} project={_d} />
                    ))}
                </tbody>
            </table>}
        </div>
    );
};

export default Home;