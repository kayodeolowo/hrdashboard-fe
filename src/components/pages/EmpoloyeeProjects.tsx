import React from 'react'

const projectData = [
  {
    id: 1,
    name: 'Amongus - Discovery Phase',
    startDate: 'Feb 01, 2026',
    finishDate: 'Mar 05, 2026',
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Wildcare - Development Project',
    startDate: 'Feb 12, 2026',
    finishDate: 'April 20, 2026',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Hingutsan Web Development',
    startDate: 'April 05, 2026',
    finishDate: 'October 05, 2026',
    status: 'In Process',
  },
  {
    id: 4,
    name: 'Montilisi Ecommerce Platform',
    startDate: 'May 12, 2026',
    finishDate: 'August 12, 2026',
    status: 'In Process',
  },
];


const EmpoloyeeProjects = () => {
  return (
    <div className="mt-4">
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-white">
        <thead>
          <tr className="border-b border-gray text-[#A2A1A8] text-left">
            <th className="p-3">Sr. No.</th>
            <th className="p-3">Project Name</th>
            <th className="p-3">Start Date</th>
            <th className="p-3">Finish Date</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((project, index) => (
            <tr
              key={project.id}
              className={`${
                index !== projectData.length - 1 ? 'border-b border-gray' : ''
              }`}
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{project.name}</td>
              <td className="p-3">{project.startDate}</td>
              <td className="p-3">{project.finishDate}</td>
              <td
                className={`p-3 ${
                  project.status === 'Completed'
                    ? 'text-green-500'
                    : 'text-yellow-500'
                }`}
              >
                {project.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default EmpoloyeeProjects