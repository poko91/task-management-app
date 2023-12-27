import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 0.625rem;
  background-color: #eef2f5;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
`;
const Title = styled.h3`
  padding: 1rem;
  font-family: "Poppins", sans-serif;
`;
const TaskList = styled.div`
  padding: 1rem;
`;

const Column = (props) => {
  return (
    <div>
      <Container>
        <Title>{props.column.title}</Title>
        <Droppable droppableId={props.column.id}>
          {(provided) => (
            <ul>
              <TaskList innerRef={provided.innerRef} {...provided.droppableProps}>
                {props.tasks.map((task, index) => (
                  <li>
                    <Task key={task.id} task={task} index={index} />
                  </li>
                ))}
                {provided.placeholder}
              </TaskList>
            </ul>
          )}
        </Droppable>
      </Container>
    </div>
  );
};

export default Column;
