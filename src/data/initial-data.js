const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Implement design screens" },
    "task-2": { id: "task-2", content: "Fix bugs in CSS codes" },
    "task-3": { id: "task-3", content: "Proofread final text" },
    "task-4": { id: "task-4", content: "Typography change" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Added",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};

export default initialData;
