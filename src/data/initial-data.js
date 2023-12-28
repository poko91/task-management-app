const initialData = {
  tasks: {
    "task-1": { id: "task-1", title: "Hero Section", content: "Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.", due_date: new Date("2024-01-05"), priority: "High" },
    "task-2": { id: "task-2", title: "Implement design screens", content: "Our designers created 6 screens for a website that needs to be implemented by our dev team.s", due_date: new Date("2024-02-02"), priority: "High" },
    "task-3": { id: "task-3", title: "Typography change", content: "Modify typography and styling of text placed on 6 screens of the website design. Prepare a documentation.", due_date: new Date("2024-01-05"), priority: "Medium" },
    "task-4": { id: "task-4", title: "Fix bugs in the CSS code", content: "Fix small bugs that are essential to prepare for the next release that will happen this quarter.", due_date: new Date("2023-12-10"), priority: "Low" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Added",
      taskIds: ["task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "Started",
      taskIds: ["task-1", "task-3"],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      taskIds: ["task-4"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
