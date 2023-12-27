import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 1.25rem;
  padding: 8px;
  margin-bottom: 8px;
`;

const Task = (props) => {
  return (
    <div>
      <Container>{props.task.content}</Container>
    </div>
  );
};

export default Task;
