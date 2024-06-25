import { CardStatus } from "@/db/repositories/projects.repo";

const StatusColors: { [key in CardStatus]: string } = {
  Backlog: "#F57C00",
  Canceled: "#90A4AE",
  In_Progress: "#FDD835",
  Completed: "#7C4DFF",
  Planned: "#2196F3",
};

export { StatusColors };
