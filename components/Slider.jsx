import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Navigation, A11y, Autoplay, Controller, EffectFade} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.css';


const Container = styled.div`

    height:100vh;


`;

const Wrapper = styled.div`
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content:flex-end;
    gap:220px;
`;

const InfoBox = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  min-width: 433px;
  height: 139px;
  border-radius: 9px;
  background: #FBE5E4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
  
`;

const ShopBoxes = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  min-width: 433px;
  min-height: 139px;
  border-radius: 9px;
  background: #FBE5E4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
`;

const ShopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height:100px;
    width: 380px;
    color:#696969;
    font-weight: 300;
    font-size: 18px
`;

const BoxWrapper = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 28px;
    
`;


const Carousel = styled.div`
  display:flex;
  width:1040px;
  
`;

const Left = styled.div`
  overflow:hidden;
  margin-left:160px;
  display: flex;
  flex-direction:column;
  color:#696969;
`;

const Info = styled.div`
  min-width:600px;
  color:#696969;
`;

const Center = styled.div`
  width:79%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  order:2;
`;

const Cover = styled.div`
  width:580px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  gap:40px;
  align-items:center;
  order:3;
  padding: 66px 0 150px 0;

`;


const Slider = () => {

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
 
  
  return (
    
    <Container>
      <Wrapper>

        <Left>
          <Cover>
        <Swiper
          style={{padding:0,paddingLeft:34}} 
          modules={[Navigation, A11y, Autoplay,Controller, EffectFade]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          
          
          spaceBetween={120}
          initialSlide={1}
          slidesPerView="auto"
          centeredSlidesBounds={true}
          centeredSlides={true}
          loop={true}
          
          autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          
          }}>

        
        <SwiperSlide><Info><h2 style={{fontWeight:600, fontSize:18, color:"black"}}>Collection 1</h2>
        <h1 style={{fontWeight:"bold", fontSize:48, color:"black"}}>Product Name</h1>
        <p style={{fontWeight:"normal", fontSize:18, width:400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Info></SwiperSlide>
        
        <SwiperSlide><Info><h2 style={{fontWeight:600, fontSize:18, color:"black"}}>Collection 2</h2>
        <h1 style={{fontWeight:"bold", fontSize:48, color:"black"}}>Product Name</h1>
        <p style={{fontWeight:"normal", fontSize:18, width:400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Info></SwiperSlide>
        
        <SwiperSlide><Info><h2 style={{fontWeight:600, fontSize:18, color:"black"}}>Collection 3</h2>
        <h1 style={{fontWeight:"bold", fontSize:48, color:"black"}}>Product Name</h1>
        <p style={{fontWeight:"normal", fontSize:18, width:400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Info></SwiperSlide>
          </Swiper>
        </Cover>

        </Left>
        
        <Bottom>
        
          <Carousel>
          <Swiper 
          style={{padding:8}} 
          modules={[Navigation, A11y, Autoplay, Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}

          spaceBetween={60}
          initialSlide={1}
          slidesPerView='auto'
          centeredSlidesBounds={true}
          loop={true}
          >
          <SwiperSlide><InfoBox><ShopWrapper><h2 style={{fontWeight:600, color:"black"}}>Product 1</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</ShopWrapper></InfoBox></SwiperSlide>
          <SwiperSlide><InfoBox><ShopWrapper><h2 style={{fontWeight:600, color:"black"}}>Product 2</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</ShopWrapper></InfoBox></SwiperSlide>
          <SwiperSlide><InfoBox><ShopWrapper><h2 style={{fontWeight:600, color:"black"}}>Product 3</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</ShopWrapper></InfoBox></SwiperSlide>   
          </Swiper>
          </Carousel>
          
          <ShopBoxes><BoxWrapper>Shop</BoxWrapper></ShopBoxes> 
      </Bottom>
      </Wrapper>  
      
    </Container>
    
  )
};

export default Slider;
