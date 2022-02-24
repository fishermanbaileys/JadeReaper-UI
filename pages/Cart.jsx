import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding:20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    vertical-align: top;
    margin: 0px auto 40px;
    padding-top: 40px;
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 200;
    font-size:48px;
    
`;

const Container2 = styled.div`

`;

const Container3 = styled.div`

`;



const Cart = () => {
  return (
      <Container>
          <Navbar/>
            <Wrapper>
                <Title>YOUR BAG</Title>

            </Wrapper>
      </Container>
  )
}

export default Cart