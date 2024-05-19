import React from 'react';
import InfoCard from './InfoCard'
import './Home.css'
import image1 from '../assets/image1.png'
function Home(){
    return(
        <>
        <hr />
        <h1 className='one'>Home Component</h1>
        <InfoCard name="Swara" designation="Tester" color="red"/>
      <InfoCard name="John" designation="Software Enginer" color="blue"/>
      <InfoCard name="Soham" designation="Graphic Designer" color="green"/>
      <InfoCard />
      <img src="{image1}" alt="image" height={200} width={200} />
        </>
    );
}

export default Home;