import React from 'react';
import Nav from '../components/Nav'
import Logo from '../media/img/richieAlien.gif'
import Footer from '../components/Footer'



const Home = () => {

    return (
        <div id="home">
            <Nav></Nav>
            <div id="homeContent">
            <h1 className='text-center text-capitalize title-color mt-2'>Home</h1>
           <img src={Logo} alt="logo" id='homeAlien'/>
            </div>
          
  <Footer></Footer>
        </div>
    );
};

export default Home;