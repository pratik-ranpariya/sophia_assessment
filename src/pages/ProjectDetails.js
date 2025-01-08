import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Get, Post } from '../common/axios/api';
import { API_GET, API_POST } from '../common/constant/api';
import { toast } from 'react-toastify';
import { formatDate } from '../common/commonFunctions';

function ProjectForm() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [projectDataFetcing, setProjectDataFetcing] = useState(false);

    useEffect(() => {
        GetProjectList();
    }, []);

    const GetProjectList = () => {
      setProjectDataFetcing(true);
        Get(API_GET.PROJECTLIST).then((response) => {
            if (response.status === 200) {
                setTableData(response.data);
            }
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            setProjectDataFetcing(false);
        });
    };

    useEffect(() => {
        if (projectId) {
            const project = tableData.find((project) => project.projectId === projectId);
            if (project) {
                setFormData({
                    projectId: project.projectId,
                    projectName: project.projectName,
                    description: project.description,
                    startDate: project.startDate,
                    endDate: project.endDate,
                    projectManager: project.projectManager,
                    isFevorite: project.isFevorite,
                });
            }
        }
    }, [projectId, tableData]);

  const [formData, setFormData] = useState({
    projectId: '',
    projectName: '',
    description: '',
    startDate: '',
    endDate: '',
    projectManager: '',
    isFevorite: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateProject = async () => {
    setLoading(true);
      try {
        const response = await Post(`${API_POST.PORJECT_DETAILS}?projectId=${formData.projectId}&projectName=${formData.projectName}&startDate=${formData.startDate}&endDate=${formData.endDate}&projectManager=${formData.projectManager}&isFevorite=${formData.isFevorite}&description=${formData.description}`);
        if(response?.status == 200){
            navigate(`/`);
            toast.success('Project updated successfully');
          }
        } catch (error) {
        toast.error('Something went wrong');
          console.error('Error:', error);
      } finally {
          setLoading(false);
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProject();
  };

  return (
    <section className="text-gray-600 body-font relative">
    {projectDataFetcing ? "loading..."
     :<div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className=" bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Project Deatils</h2>
        <p className="leading-relaxed mb-5 text-gray-600"></p>
        <div className="relative mb-4">
          <label for="name" className="leading-7 text-sm text-gray-600">Project ID |{projectId}</label>
          <input type="text" id="projectId" name="projectId" disabled={true} value={formData.projectId} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">Project Name</label>
          <input type="text" id="projectName" name="projectName" value={formData.projectName} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label for="message" className="leading-7 text-sm text-gray-600">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">Start Date</label>
          <input type="date" id="startDate" name="startDate" value={formatDate(formData.startDate)} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">End Date</label>
          <input type="date" id="endDate" name="endDate" value={formatDate(formData.endDate)} onChange={handleChange}  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4 flex justify-start items-center">
          <label for="isFevorite" className="leading-7 text-sm text-gray-600">Favorite</label>
          <input type="checkbox" id="isFevorite" name="isFevorite" checked={formData.isFevorite} 
          onChange={(e) => setFormData((prevData) => ({
            ...prevData,
            isFevorite: e.target.checked,
          }))}
          className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ml-[10px]" />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" disabled={loading} onClick={handleSubmit}>{loading ? "Updating..." : "Update"}</button>
      </div>
    </div>}
  </section>
  );
}

export default ProjectForm;