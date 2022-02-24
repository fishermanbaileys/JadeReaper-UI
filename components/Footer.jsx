import styled from "styled-components";
import footer from '../assets/images/footer.png'
import LogoSrc from '../assets/images/jadereaperlogo.png'

const Container = styled.div`
   width: 100%;
   height: 30vh;
   display:flex;
   background-image: url(${footer});
   background-size: cover;
   background-color:#FBE5E4;
   flex-direction:column;
    text-align
`;

const Right = styled.div`
  flex:1;
  padding:30px;
  text-align:center;
  display:flex;
  flex-direction:row;
`;


const Left = styled.div`
  flex:1;
  padding:24px;
  

`;

const Col = styled.div`
  flex:1;
  padding:20px;
  flex-wrap:nowrap;

`;
const Row = styled.div`
  flex:1;
  padding:9px;
  display:flex;
  flex-direction: row;

`;

const SubCont = styled.div`
  display:flex;
  width:100%;
  justify-content: center;
`;

const P = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #696969;
  text-align:left;
  padding:4px;
`;

const Header = styled.h2`
  font-weight: 600;
  font-size: 24px;
  text-align:left;
  padding:4px;

`;


const HeaderImg = styled.img.attrs({
  src: `${LogoSrc}`
})`
  width: 178px;
  height: 70px;
  padding: 0 0 0 24px;
  
`


function Footer() {
  return (
      <Container>
        <SubCont>
        <Left>
          <Row><HeaderImg/></Row> 
          <Row>
            <Col><Header>Terms & Conditions</Header></Col>
            <Col><Header>Privacy Policy</Header></Col>
          </Row>
        </Left>
        <Right>
          <Col>
          <Header>About</Header>
          <P>Our Brand</P>
          <P>FAQ</P>
          </Col>
          <Col>
          <Header>Contact</Header>
          <P>Our Brand</P>
          <P>FAQ</P>
          </Col>
          <Col><Header>Follow Us</Header></Col>
        </Right>
        </SubCont>
        <SubCont>Jade Reaper © 2022. All rights reserved.</SubCont>
      </Container>
  );
}

export default Footer;
