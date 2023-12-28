import styled from "styled-components";
import { MdClose } from "react-icons/md";
import AddButton from "./AddTask";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #eef5fe;
  max-width: 500px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  transform: translateY(-100%);
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease all;
  z-index: -1;
  &:hover {
    background-color: #e32525;
    color: white;
  }
`;

const FormTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
`;

const Form = styled.div`
  width: 100%;
  padding-right: 24px;
  label {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: #707070;
    input,
    textarea,
    select {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      width: 100%;
      padding: 0.75rem;
      border: 1px solid lightgray;
      border-radius: 10px;
      font-size: 0.9rem;
    }
  }
`;

const Submit = styled.button`
  margin-top: 1rem;
  font-size: 1em;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  padding: 0.25em 1em;
  background-color: #eef2f5;
  border: 1px solid lightgray;
  border-radius: 5px;
  &:hover {
    background-color: #dbdfe3;
  }
`;

const AddTaskModal = (props) => {
  return (
    <Wrapper>
      <Container>
        <CloseButton>
          <MdClose size={25} />
        </CloseButton>
        <Form>
          <form>
            <FormTitle>Add Task</FormTitle>
            <label htmlFor="title">
              Title
              <input type="text" id="title" />
            </label>
            <label htmlFor="content">
              Content
              <textarea type="text" id="content" />
            </label>
            <label htmlFor="priority">
              Priority
              <select name="priority" id="priority">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </label>
          </form>
          <Submit type="submit">Add Task</Submit>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default AddTaskModal;
