import TaskList from "../components/TaskList/TaskList";
import styled from "styled-components";
import AddTask from "../components/CreateTask/AddTask";

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
  return (
    <Container>
      <Wrapper>
        <Title>Board</Title>
        <AddTask />
      </Wrapper>
      <TaskList />
    </Container>
  );
};

export default Board;
