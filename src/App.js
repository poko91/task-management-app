import { useState } from "react";
import "./index.css";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./data/initial-data";
import Column from "./components/TaskList/Column";

function App() {
  const [state] = useState(initialData);

  return state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

    return (
      <DragDropContext
        onDragEnd={() => {
          console.log("drag drop event occurred");
        }}
      >
        <div>
          <Column key={column.id} column={column} tasks={tasks} />
        </div>
      </DragDropContext>
    );
  });
}

export default App;
