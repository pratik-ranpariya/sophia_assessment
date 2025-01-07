
import React, { useState, useEffect } from 'react';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';
import { Get } from '../common/axios/api';
import { API_GET } from '../common/constant/api';

const Home = () => {
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        GetProjectList();
    }, []);

    const GetProjectList = () => {
        setLoading(true);
        Get(API_GET.PROJECTLIST).then((response) => {
            if (response.status === 200) {
                setTableData(response.data);
            }
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="overflow-x-auto">
            {loading ? 
                "Loading..."
            : <table className="min-w-full bg-white border border-gray-200">
                <TableHeader />
                <tbody>
                    {tableData.length > 0 && tableData.map((project) => (
                        <TableRow key={project.id} project={project} />
                    ))}
                </tbody>
            </table>}
        </div>
    );
};

export default Home;