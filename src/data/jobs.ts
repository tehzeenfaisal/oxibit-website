export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
}

export const jobOpenings: JobOpening[] = [
  { title: "Senior Full-Stack Engineer", department: "Engineering", location: "Remote / Lahore", type: "Full-time" },
  { title: "Product Designer (UI/UX)", department: "Design", location: "Remote", type: "Full-time" },
  { title: "QA Automation Engineer", department: "Quality", location: "Lahore", type: "Full-time" },
  { title: "DevOps / Cloud Engineer", department: "Infrastructure", location: "Remote / Lahore", type: "Full-time" },
  { title: "Client Success Manager", department: "Client Success", location: "Tuxedo, NY", type: "Full-time" },
];
