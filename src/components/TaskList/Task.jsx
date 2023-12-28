import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.li`
  background-color: white;
  border-radius: 1.25rem;
  padding: 1.05rem 1.5rem;
  margin-bottom: 8px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Priority = styled.p`
  color: ${(props) => (props.task.priority === "High" ? "red" : props.task.priority === "Medium" ? "orange" : props.task.priority === "Low" ? "blue" : "white")};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.6rem;
  margin: 0;
`;

const DueDate = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.6rem;
  margin: 0;
`;

const Title = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
`;

const Content = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  margin: 0;
`;

const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Wrapper>
            <Priority task={props.task}>{props.task.priority}</Priority>
            <DueDate>{props.task.due_date.toLocaleDateString()}</DueDate>
          </Wrapper>
          <Title>{props.task.title}</Title>
          <Content>{props.task.content}</Content>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
