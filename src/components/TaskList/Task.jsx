import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.li`
  background-color: white;
  border-radius: 1.25rem;
  padding: 8px;
  margin-bottom: 8px;
  list-style-type: none;
`;

const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
