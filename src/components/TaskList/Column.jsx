import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
  margin: 0.625rem;
  background-color: #eef2f5;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
`;
const Title = styled.h3`
  padding: 1rem;
`;
const TaskList = styled.div`
  padding: 1rem;
`;

const Column = (props) => {
  return (
    <div>
      <Container>
        <Title>{props.column.title}</Title>
        <TaskList>
          {props.tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </TaskList>
      </Container>
    </div>
  );
};

export default Column;
