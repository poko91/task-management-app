// TaskList.jsx
import React from "react";
import Column from "./Column";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const TaskList = ({ tasks }) => {
  return (
    <Container>
      {tasks.columnOrder.map((columnId) => {
        const column = tasks.columns[columnId];
        const columnTasks = column.taskIds.map((taskId) => tasks.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={columnTasks} />;
      })}
    </Container>
  );
};

export default TaskList;
