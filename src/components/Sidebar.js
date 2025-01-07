import React, { useState } from 'react';
import HomeIcon from '../Icons/Svg/HomeIcon';
import BarsIcon from '../Icons/Svg/BarsIcon';

const Sidebar = ({project}) => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(project, 'sjnqjsnjkqnsjknqwjksjkqwns');
  
  return (
    <div className="flex">
      <div className={`min-h-screen ${isOpen ? 'w-64' : 'w-20'} bg-gray-50 shadow-md transition-all duration-300 p-[15px]`}>
        <div className="p-4 flex items-center justify-between">
          <h2 className={`text-lg font-semibold text-gray-900 ${isOpen ? 'block' : 'hidden'}`}>Dashboard</h2>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <BarsIcon className="h-6 w-6" /> : <BarsIcon className="h-6 w-6" />}
          </button>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-2 p-3 bg-blue-600 text-white rounded-md">
                <HomeIcon />
                <span className={`${isOpen ? 'block' : 'hidden'}`}>Project</span>
              </a>
            <h3 className={`px-4 text-sm font-medium text-gray-500 uppercase ${isOpen ? 'block' : 'hidden'}`}>Favorite Projects</h3>
            </li>
                {project.map((_d) => (
            <li className='px-4'>
              <a href="#" className="flex items-center space-x-2 p-3 bg-blue-100 text-white rounded-md">
                <span className={`${isOpen ? 'block' : 'hidden'}`}>{_d.projectName}</span>
              </a>
            </li>
                ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;