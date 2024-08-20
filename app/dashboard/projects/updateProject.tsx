import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Updateprojects } from "@/app/hooks/useProjects"; // Adjust import path
import { z } from "zod";
import { ProjectSchema } from "./schema";

interface UpdateProjectFormProps {
  initialData: ProjectFormData; // Pass in the initial data for the form
}
export type ProjectFormData = z.infer<typeof ProjectSchema>;
const UpdateProjectForm: React.FC<UpdateProjectFormProps> = ({ initialData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProjectFormData>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: initialData, // Populate the form with initial data
  });

  const { mutation } = Updateprojects();

  const onSubmit = (data: ProjectFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        console.log("Project updated successfully");
      },
      onError: (error) => {
        console.error("Error updating project:", error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Name</label>
        <input
          {...register("name")}
          placeholder="Project Name"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label>Description</label>
        <textarea
          {...register("description")}
          placeholder="Project Description"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.description && <p className="text-red-600">{errors.description.message}</p>}
      </div>

      <div>
        <label>Start Date</label>
        <input
          {...register("start_date")}
          type="datetime-local"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.start_date && <p className="text-red-600">{errors.start_date.message}</p>}
      </div>

      <div>
        <label>End Date</label>
        <input
          {...register("end_date")}
          type="datetime-local"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.end_date && <p className="text-red-600">{errors.end_date.message}</p>}
      </div>

      <div>
        <label>Status</label>
        <input
          {...register("status")}
          placeholder="Status"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.status && <p className="text-red-600">{errors.status.message}</p>}
      </div>

      <div>
        <label>Client Name</label>
        <input
          {...register("client.name")}
          placeholder="Client Name"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.client?.name && <p className="text-red-600">{errors.client.name.message}</p>}
      </div>

      <div>
        <label>Client Email</label>
        <input
          {...register("client.email")}
          type="email"
          placeholder="Client Email"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.client?.email && <p className="text-red-600">{errors.client.email.message}</p>}
      </div>

      <div>
        <label>Client Company</label>
        <input
          {...register("client.company_name")}
          placeholder="Client Company"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.client?.company_name && <p className="text-red-600">{errors.client.company_name.message}</p>}
      </div>

      <div>
        <label>Budget</label>
        <input
          {...register("budget")}
          type="text"
          placeholder="Budget"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.budget && <p className="text-red-600">{errors.budget.message}</p>}
      </div>

      <div>
        <label>Progress</label>
        <input
          {...register("progress")}
          type="number"
          placeholder="Progress (%)"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.progress && <p className="text-red-600">{errors.progress.message}</p>}
      </div>

      <div>
        <label>Image</label>
        <input
          {...register("image")}
          type="text"
          placeholder="Image URL"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.image && <p className="text-red-600">{errors.image.message}</p>}
      </div>

      <div>
        <label>Team Members</label>
        {initialData.team_members.map((member, index) => (
          <div key={member.id} className="mb-2">
            <label>Team Member Name</label>
            <input
              {...register(`team_members.${index}.name`)}
              placeholder="Name"
              className="border border-gray-300 rounded px-3 py-2"
            />
            {errors.team_members?.[index]?.name && (
              <p className="text-red-600">{errors.team_members[index].name?.message}</p>
            )}

            <label>Team Member Role</label>
            <input
              {...register(`team_members.${index}.role`)}
              placeholder="Role"
              className="border border-gray-300 rounded px-3 py-2"
            />
            {errors.team_members?.[index]?.role && (
              <p className="text-red-600">{errors.team_members[index].role?.message}</p>
            )}

            <label>Team Member Department</label>
            <input
              {...register(`team_members.${index}.department`)}
              placeholder="Department"
              className="border border-gray-300 rounded px-3 py-2"
            />
            {errors.team_members?.[index]?.department && (
              <p className="text-red-600">{errors.team_members[index].department?.message}</p>
            )}
          </div>
        ))}
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Update Project
      </button>
    </form>
  );
};

export default UpdateProjectForm;
