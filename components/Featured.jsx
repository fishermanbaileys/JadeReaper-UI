import styled from "styled-components";
import Tilt from "react-tilt";
import background from '../assets/images/background_gradient.svg'
import { Navigation, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.css';
import { categories } from "../data";
import purp from '../assets/images/Vector.png';

const Container = styled.div`

   background-image: url(${background});
   background-size: cover;
`;

const Purpgoo = styled.img.attrs({
  src: purp
})`
z-index:1;
margin-top:-380px;
width: 30vw;
height: 30vw;


`

const Header = styled.div`
  padding-top:px;
  font-size: 48px;
  font-weight: bold;
  display:flex;
  justify-content:center;
`;


const Tile = styled.div`
  
  width: 475px;
  height: 610px;
  background: #FBE5E4;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 31px;

  &:hover{
      
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      
  }
`;

const TileWrapper = styled.div`
  padding:14px;
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items:center;
  flex:1;
  z-index:999;

`;


const Title = styled.h1`
  color: Black;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;


const Button = styled.button`
    font-weight: 600;
    text-align:center;
    border:none;
    color:white;
    font-size:28px;
    display: flex;
    justify-content:center;
    margin-top: auto;
    padding: 4px 64px 4px 64px;
    background: #000000;
    box-shadow: 0 3px 8px grey;
    border-radius: 32px;

    &:hover{
      box-shadow: 0 3px 8px grey;
      transform: translate3d(0, 0, 0);
      background:grey;
      cursor: pointer;
      
    }

    &:active{
      top: 2px;
      left: 1px;
      box-shadow: none;

    }
`;


//set the cards to the maximum size so the will scale  in size and then at

function Featured() {

  return (
      <Container>
        <Purpgoo></Purpgoo>
        <Header>Featured Products</Header>
        
        <Swiper
        
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={146}
        initialSlide={3}
        slidesPerView='auto'
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        autoplay={{
         delay: 2500,
         disableOnInteraction: true,
        }}
        
        > 
         {categories?.map((item) => {
           return (
            <SwiperSlide key={item.id}>     
              <Tilt options={{ max : 8 , scale : 1}} >
                <Tile>
                  <TileWrapper> 
                    <Title>{item.title}</Title>
                    <Image src={item.img}></Image>
                    <Button>View</Button>
                  </TileWrapper>
                </Tile>
              </Tilt>
            </SwiperSlide>


           );
         })}
          
            
          </Swiper>
          
      </Container>
  );
}
export default Featured;
