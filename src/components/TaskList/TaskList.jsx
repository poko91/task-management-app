import React from "react";
import Column from "./Column";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const TaskList = ({ tasks, filter }) => {
  const filteredTasks = tasks.columnOrder.reduce((result, columnId) => {
    const column = tasks.columns[columnId];
    const filteredColumnTasks = column.taskIds.map((taskId) => tasks.tasks[taskId]).filter((task) => !filter || task.priority === filter);

    result[columnId] = {
      ...column,
      taskIds: filteredColumnTasks.map((task) => task.id),
    };
    return result;
  }, {});

  return (
    <Container>
      {Object.values(filteredTasks).map((column) => {
        const columnTasks = column.taskIds.map((taskId) => tasks.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={columnTasks} />;
      })}
    </Container>
  );
};

export default TaskList;
