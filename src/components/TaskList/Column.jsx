import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 0.625rem;
  background-color: #eef2f5;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  min-height: 100%;
`;
const Title = styled.h3`
  padding: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;
`;
const TaskList = styled.ul`
  padding: 1rem;
`;

const Column = (props) => {
  return (
    <div>
      <Container>
        <Title>{props.column.title}</Title>
        <Droppable droppableId={props.column.id}>
          {(provided) => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    </div>
  );
};

export default Column;
