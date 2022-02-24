import styled from "styled-components";

const Container = styled.div`
    
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    
`;

const Wrapper = styled.div`
   display:flex;
   width: 100%;
   height: 45vh; 
   background-color: white;
    
`;


function Brandbar() {
  return(
      <Container>
          <Wrapper></Wrapper>
      </Container>
  );
}

export default Brandbar;
