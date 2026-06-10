interface Project {
  id: string;
  title: string;
  description: string;
  image: string[];
  github: string;
  vercel: string;
  tags: string[];
  longDescription?: string;
  features?: string[];
  timeline?: string;
  role?: string;
}

export default Project;
