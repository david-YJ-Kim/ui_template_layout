import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  /* gap: 10px; */
`;

const IContainer = styled.div`
  border: 1px solid black;
`;

const InlineContainer = styled(IContainer)`
  grid-column-start: 1;
  grid-column-end: 4;
`;

const HeaderContainer = styled(InlineContainer)`
  background-color: #0984e3;
  height: 15vh;
`;

const NaviagteContainer = styled(IContainer)`
  background-color: #00b894;
  height: 70vh;
`;

const ContentContainer = styled(IContainer)`
  background-color: #55efc4;
  grid-column-start: 2;
  grid-column-end: -1;
  height: 70vh;
`;

const FooterContainer = styled(InlineContainer)`
  background-color: #636e72;
  min-height: 15vh;
`;

function MainHomePage() {
  return (
    <>
      <Container>
        <HeaderContainer></HeaderContainer>
        <NaviagteContainer></NaviagteContainer>
        <ContentContainer></ContentContainer>
        <FooterContainer></FooterContainer>
      </Container>
    </>
  );
}

export default MainHomePage;
