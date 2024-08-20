import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ApiClient from "../Services/api-Client";
import { Project } from "../entites/projects";


const apiClient = new ApiClient<Project>("api/projects");

export const FetchProjects = () =>
  useQuery<Project[], Error>({
    queryKey: ["projects"],
    queryFn: apiClient.getAll.bind(apiClient),
    staleTime: 1 * 60 * 1000,
  });

export const Postprojects = () => {
  const queryClient = useQueryClient();
  return useMutation<Project, Error, Project>({
    mutationFn: (Project: Project) => apiClient.post(Project),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error: Error) => {
      console.error("Error posting data:", error);
    },
  });
};

export const GetprojectsById = (id: number) =>
  useQuery<Project, Error>({
    queryKey: ["projectsid", id],
    queryFn: async () => {
      if (!id) throw new Error("ID is required");
      return await apiClient.getById(id);
    },
    staleTime: 1 * 60 * 1000,
  });

export const Updateprojects = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<Project, Error, Project>({
    mutationFn: (center: Project): Promise<Project> => {
      const id = center.id ?? null;
      return apiClient.update(center, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return { mutation };
};

export const useDeleteCenter = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<void, Error, string>({
    mutationFn: async (id: string): Promise<void> => {
      await apiClient.delete(parseInt(id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["center"] });
    },
  });

  return { deleteCenter: mutation.mutateAsync };
};