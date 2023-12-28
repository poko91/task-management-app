import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../data/initial-data";
import Column from "../components/TaskList/Column";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Board = () => {
  const [store, setStore] = useState(initialData);

  const handleDragDrop = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    const startColumn = store.columns[source.droppableId];
    const finishColumn = store.columns[destination.droppableId];

    // Dragging within the same column
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
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
    } else {
      // Moving to a different column
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finishColumn.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finishColumn,
        taskIds: finishTaskIds,
      };

      const newStore = {
        ...store,
        columns: {
          ...store.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      setStore(newStore);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <Container>
        {store.columnOrder.map((columnId) => {
          const column = store.columns[columnId];
          const tasks = column.taskIds.map((taskId) => store.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};

export default Board;
