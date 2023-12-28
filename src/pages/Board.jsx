import TaskList from "../components/TaskList/TaskList";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import AddTask from "../components/CreateTask/AddTask";
import AddTaskModal from "../components/CreateTask/AddTaskModal";
import PriorityFilter from "../components/TaskList/PriorityFilter";
import initialData from "../data/initial-data";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

const Board = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState(initialData);

  const [filter, setFilter] = useState("");

  const handleDragDrop = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    const startColumn = tasks.columns[source.droppableId];
    const finishColumn = tasks.columns[destination.droppableId];

    // Dragging within the same column
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      const newtasks = {
        ...tasks,
        columns: {
          ...tasks.columns,
          [newColumn.id]: newColumn,
        },
      };

      setTasks(newtasks);
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

      const newtasks = {
        ...tasks,
        columns: {
          ...tasks.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      setTasks(newtasks);
    }
  };

  const addTaskToColumn = (newTask) => {
    const newTaskId = `task-${Object.keys(tasks.tasks).length + 1}`;
    const newTasks = {
      ...tasks.tasks,
      [newTaskId]: { id: newTaskId, ...newTask },
    };
    const updatedTasks = {
      ...tasks,
      tasks: newTasks,
      columns: {
        ...tasks.columns,
        ["column-1"]: {
          ...tasks.columns["column-1"],
          taskIds: [...tasks.columns["column-1"].taskIds, newTaskId],
        },
      },
    };

    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Task Board</Title>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <AddTask setModalOpen={setModalOpen} />
          <PriorityFilter filter={filter} setFilter={setFilter} />
        </div>
        <AddTaskModal modalOpen={modalOpen} setModalOpen={setModalOpen} addTaskToColumn={addTaskToColumn} />
      </Wrapper>
      <DragDropContext onDragEnd={handleDragDrop}>
        <TaskList tasks={tasks} filter={filter} />
      </DragDropContext>
    </Container>
  );
};

export default Board;
