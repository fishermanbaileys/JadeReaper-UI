import { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Select from 'react-select';


const Container = styled.div`

`;

const Title = styled.h1`
  font-weight:700;
  margin:20px;
`;



const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin:20px;
`;

const FilterTextL = styled.button`
  font-size:24px;
  font-weight:700;
  cursor: pointer;
  border-radius:5px;
  border: 2px solid #F5CEDD;
  background-color:white;
  padding:4px 18px 4px 18px; 
  
  box-shadow: inset 0 0 0 0 #F5CEDD;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;


  &:hover {
    box-shadow: inset 0 0 0 50px #F5CEDD;
  }
`;

const FilterTextR = styled.span`
  font-size:24px;
  font-weight:700;
  margin-right: 10px;
  cursor: pointer;
  padding:4px 18px 4px 18px; 
`;

const FilterHeader = styled.div`
  display: flex;
  min-height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 42px 30px 30px 30px;
  font-size: 40px;
  font-weight:700;
  border-bottom: 1px solid #000;
`;

const Selects = styled.select`
  font-size:24px;
  padding: 3px;
  margin-right: 20px;
  cursor: pointer;
  border-radius:5px;
  border: 2px solid #F5CEDD;
  background-color:white;
  font-weight:600px;
`;


const FilterBlocks = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

const FilterBlock = styled.div`
  width: 90%;
  flex-direction: column;
  align-items: center;
  padding:14px;
  border-bottom: 1px solid #000;
  transition: 0.8s ease;
`;



const BlockHeader = styled.h2`
  font-size:20px;
  font-wieght:600;

`;


const Option = styled.option`

`;

//visibility: ${({isOpen}) => (isOpen ? 'visible' : 'hidden')}
const Menu = styled.div`
    z-index: 999;
    width: 600px;
    min-height: 100vh;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
    background-color: #F5CEDD;
    position: fixed;
    top: 0;
    opacity:1;
    transition: 0.5s ease;
    left: ${({isOpen}) => (isOpen ? '0' : '-100%')}
    

`;

const colors = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];



const ProductList = () => {

  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
      setIsOpen(!isOpen);
  };

  return (
    <Container>
    <Navbar/>
    <Announcement/>
    
    <Title>Lorem Ipsum</Title>
    
    <FilterContainer>
   
      <Filter>
        <FilterTextL onClick={ToggleSidebar} >Filter Products</FilterTextL>
        
        <Menu isOpen={isOpen}>
        
          <FilterHeader onClick={ToggleSidebar}>Filter By</FilterHeader>
            <FilterBlocks>
              <FilterBlock>
                <BlockHeader>Colors</BlockHeader>
                <Select
                  
                  placeholder='Select A Color'
                  options={colors}
                  isMulti
                  name="Colors"
                />
              </FilterBlock> 
              <FilterBlock>
              <BlockHeader>Colors</BlockHeader>
                <Select 
                    options={colors}
                    isMulti
                    name="Colors"
                  />
              </FilterBlock>
              <FilterBlock>
              <BlockHeader>Colors</BlockHeader>
                <Select 
                    options={colors}
                    isMulti
                    name="Colors"
                  />
              </FilterBlock>
              <FilterBlock>
              <BlockHeader>Colors</BlockHeader>
                <Select 
                    options={colors}
                    isMulti
                    name="Colors"
                  />
              </FilterBlock>
            </FilterBlocks>
          
        </Menu>
        
      </Filter>
      
      <Filter>  
        <FilterTextR>Sort Products:</FilterTextR>
        <Selects>
          <Option selected>Newest</Option>
          <Option>Featured</Option>
          <Option>Best Selling</Option>
          <Option>Price: Low to High</Option>
          <Option>Price: High to Low</Option>
          <Option>A - Z</Option>
          <Option>Z - A</Option>
        </Selects>
      </Filter>
      
    </FilterContainer>
    
    <Footer/>
    
    </Container>
  )
}

export default ProductList;
