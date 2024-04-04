import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const Box = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SampleLayout() {
  return (
    <>
      <Container>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </Container>
    </>
  );
}
