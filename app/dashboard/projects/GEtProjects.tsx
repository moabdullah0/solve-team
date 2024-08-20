import React from "react";
import { FetchProjects } from "@/app/hooks/useProjects";

const ProjectTable = () => {
  const { data: projects, isLoading, error } = FetchProjects();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects: {error.message}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Start Date</th>
            <th className="py-3 px-6 text-left">End Date</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Client</th>
            <th className="py-3 px-6 text-left">Budget</th>
            <th className="py-3 px-6 text-left">Progress</th>
            <th className="py-3 px-6 text-left">Team Members</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {projects?.map((project) => (
            <tr key={project.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {project.id}
              </td>
              <td className="py-3 px-6 text-left">
                {project.name}
              </td>
              <td className="py-3 px-6 text-left">
                {project.description}
              </td>
              <td className="py-3 px-6 text-left">
                {new Date(project.start_date).toLocaleDateString()}
              </td>
              <td className="py-3 px-6 text-left">
                {new Date(project.end_date).toLocaleDateString()}
              </td>
              <td className="py-3 px-6 text-left">
                {project.status}
              </td>
              <td className="py-3 px-6 text-left">
                {project.client.name} ({project.client.company_name})
              </td>
              <td className="py-3 px-6 text-left">
                ${project.budget}
              </td>
              <td className="py-3 px-6 text-left">
                {project.progress}%
              </td>
              <td className="py-3 px-6 text-left">
                {project.team_members.map(member => member.name).join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
