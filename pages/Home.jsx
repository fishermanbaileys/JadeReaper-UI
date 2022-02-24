import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import background from '../assets/images/groupedGoo.svg'
import background2 from '../assets/images/testgoo.svg'
import Optionboxes from '../components/Optionboxes'
import Brandbar from '../components/Brandbar'
import Featured from '../components/Featured'
import Footer from '../components/Footer'



const Background = styled.div`
    
    
`;




const Home = () => {
    return (
        <div>
            <Announcement />
            <Background>
            <Navbar />
            <Slider />
            <Brandbar />
            </Background>
            <Optionboxes />
            <Featured/>
            <Footer />
        </div>
    )
}

export default Home
