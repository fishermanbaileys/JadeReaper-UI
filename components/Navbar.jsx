import React from 'react'
import styled from 'styled-components'
import { Carticon, Usericon, Hamburgericon, Searchicon } from './navicons.js'
import LogoSrc from '../assets/images/jadereaperlogo.png'

const Container = styled.div`
    height:80px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    
`;

const HeaderImg = styled.img.attrs({
    src: `${LogoSrc}`
  })`
    width: 178px;
    height: 70px;
    
    
  `;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const SearchInput = styled.input`
    border:none;
    border-radius: 25px;
    background:white;
    outline:none;
    float:left;
    color: #fffff;
    font-size:18px;
    transition : 0.4s;
    width : 0px;
    visibility: hidden;

    
`;

const SearchContainer = styled.div`
    display:flex;
    align-items: center;
    
    &:hover > ${SearchInput}  {
        width: 200px;
        padding: 0 12px;
        background-color:#F9F0F0;
        visibility: visible;
        
      }

      &:hover {
          background-color: white;
          border-radius:30px;
          transition-timing-function: ease-out;
          transition: 1s;
      }
`;


const MenuItem = styled.div`
  cursor: pointer;
  margin-left:25px;

`;

const Badge = styled.div`
    position: absolute;
    margin-top:10.5px;
    margin-left:12px;
    
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left></Left>
                <Center>
                    <HeaderImg />
                </Center>
                <Right>
                    <MenuItem>
                        <SearchContainer>
                            <SearchInput />
                            <Searchicon />
                        </SearchContainer>
                    </MenuItem>    
                    <MenuItem><Usericon /></MenuItem>
                    <MenuItem><Badge>3</Badge><Carticon/></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
