import { useState } from "react";
import "./index.css";
import initialData from "./data/initial-data";
import Column from "./components/TaskList/Column";

function App() {
  const [state] = useState(initialData);

  return state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

    return (
      <div>
        <Column key={column.id} column={column} tasks={tasks} />
      </div>
    );
  });
}

export default App;
