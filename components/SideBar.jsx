import styled from 'styled-components'


const Menu = styled.div`
    background: #34495e;
    height: 100vh;
    width: 250px;
    opacity:0; 
    positon: absolute;
    visibility: !{(Open)};
    transition: all 0.25s ease;
    transform: translateX(-50%);
`;

const SideBar = () => {

  return (
    <Menu>
        
    </Menu>
  )
}

export default SideBar