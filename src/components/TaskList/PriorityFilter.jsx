import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-right: 24px;
  label {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: #707070;
    select {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      width: 100%;
      padding: 1rem;
      border: 1px solid lightgray;
      border-radius: 10px;
      font-size: 1rem;
      color: #707070;
    }
  }
`;

const PriorityFilter = ({ filter, setFilter }) => {
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Container>
      <label htmlFor="filter">Priority: </label>
      <select name="filter" value={filter} onChange={handleChangeFilter}>
        <option value="">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </Container>
  );
};

export default PriorityFilter;
