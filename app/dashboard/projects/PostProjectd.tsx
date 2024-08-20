import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ProjectSchema } from "./schema";
import { Postprojects } from "@/app/hooks/useProjects";


const ProjectFormSchema = ProjectSchema.omit({ id: true }); // Remove the 'id' field for the form

type ProjectFormData = z.infer<typeof ProjectFormSchema>;

const ProjectForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProjectFormData>({
    resolver: zodResolver(ProjectFormSchema),
  });

  const mutation = Postprojects();

  const onSubmit = (data: ProjectFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        console.log("Project posted successfully");
      },
      onError: (error:any) => {
        console.error("Error posting project:", error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} placeholder="Project Name" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Description</label>
        <textarea {...register("description")} placeholder="Project Description" />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label>Start Date</label>
        <input {...register("start_date")} type="datetime-local" />
        {errors.start_date && <p>{errors.start_date.message}</p>}
      </div>

      <div>
        <label>End Date</label>
        <input {...register("end_date")} type="datetime-local" />
        {errors.end_date && <p>{errors.end_date.message}</p>}
      </div>

      <div>
        <label>Status</label>
        <input {...register("status")} placeholder="Status" />
        {errors.status && <p>{errors.status.message}</p>}
      </div>

      <div>
        <label>Client Name</label>
        <input {...register("client.name")} placeholder="Client Name" />
        {errors.client?.name && <p>{errors.client.name.message}</p>}
      </div>

      <div>
        <label>Client Email</label>
        <input {...register("client.email")} type="email" placeholder="Client Email" />
        {errors.client?.email && <p>{errors.client.email.message}</p>}
      </div>

      <div>
        <label>Client Company</label>
        <input {...register("client.company_name")} placeholder="Client Company" />
        {errors.client?.company_name && <p>{errors.client.company_name.message}</p>}
      </div>

      <div>
        <label>Budget</label>
        <input {...register("budget")} placeholder="Budget" type="number" />
        {errors.budget && <p>{errors.budget.message}</p>}
      </div>

      <div>
        <label>Progress</label>
        <input {...register("progress")} type="number" placeholder="Progress (%)" />
        {errors.progress && <p>{errors.progress.message}</p>}
      </div>

      <div>
        <label>Image</label>
        <input {...register("image")} type="text" placeholder="Image URL" />
        {errors.image && <p>{errors.image.message}</p>}
      </div>

      <div>
        <label>Team Members</label>
        {/* Example for adding a single team member */}
        <div>
          <label>Team Member Name</label>
          <input {...register("team_members.0.name")} placeholder="Name" />
          {errors.team_members?.[0]?.name && <p>{errors.team_members[0].name.message}</p>}
        </div>
        <div>
          <label>Team Member Role</label>
          <input {...register("team_members.0.role")} placeholder="Role" />
          {errors.team_members?.[0]?.role && <p>{errors.team_members[0].role.message}</p>}
        </div>
        <div>
          <label>Team Member Department</label>
          <input {...register("team_members.0.department")} placeholder="Department" />
          {errors.team_members?.[0]?.department && <p>{errors.team_members[0].department.message}</p>}
        </div>
      </div>

      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
