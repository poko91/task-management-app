import styled from "styled-components";

export const AddButton = styled.button`
  font-size: 1em;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  margin: 1em;
  padding: 0.25em 1em;
  background-color: #eef2f5;
  border: 1px solid lightgray;
  border-radius: 3px;
  &:hover {
    background-color: #eef5fe;
  }
`;

const AddTask = () => {
  return <AddButton>Add Task</AddButton>;
};

export default AddTask;
