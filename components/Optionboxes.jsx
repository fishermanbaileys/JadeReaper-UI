import styled from "styled-components";


const Container = styled.div`
    
    z-index:999;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;

`;

const Wrapper = styled.div`
   display:flex;
   flex-direction:row;
   width: 100%;
    height: 85vh;
    
    
`;

const Left = styled.div`
    min-width:400px;
    min-height:400px;
    flex:1;
    display: flex;
    align-items: center;
    background-color: #F6D6FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index:999;
`;

const Right = styled.div`
    min-width:400px;
    min-height:400px;
    flex:1;
    display: flex;
    align-items: center;
    background-color: #D1ACF4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
`;


function Optionboxes() {
  
  
    return(
        <Container>
            <Wrapper>
                <Left></Left>
                <Right></Right>
                
            </Wrapper>
        </Container>
    );
}

export default Optionboxes;
