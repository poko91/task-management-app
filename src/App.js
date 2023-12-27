import { useState } from "react";
import "./index.css";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./data/initial-data";
import Column from "./components/TaskList/Column";

function App() {
  const [store, setStore] = useState(initialData);

  return store.columnOrder.map((columnId) => {
    const column = store.columns[columnId];
    const tasks = column.taskIds.map((taskId) => store.tasks[taskId]);

    const handleDragDrop = (result) => {
      // console.log(result);
      const { source, destination, draggableId } = result;
      if (!destination) return;
      if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return;
      }

      const column = store.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };

      const newStore = {
        ...store,
        columns: {
          ...store.columns,
          [newColumn.id]: newColumn,
        },
      };

      setStore(newStore);
    };

    return (
      <DragDropContext onDragEnd={handleDragDrop}>
        <div>
          <Column key={column.id} column={column} tasks={tasks} />
        </div>
      </DragDropContext>
    );
  });
}

export default App;
