interface Client {
    id?: number;
    name: string;
    email: string;
    company_name: string;
}

interface TeamMember {
    id?: number;
    name: string;
    role: string;
    department: string;
}

export interface Project {
    id?: number;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    status: string;
    client: Client;
    budget: string;
    progress: number;
    image: string | null;
    team_members: TeamMember[];
}
