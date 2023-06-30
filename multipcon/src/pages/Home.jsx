import * as React from 'react';
import Introduction from '../components/introduction/Introduction';
import Experiences from '../components/experiences/Experiences';
import Appheader from '../components/header/Appheader';
import Footer from '../components/footer/Footer';

function Home() {
    return (
      <>

      <div id="About">
        <Introduction/>
      </div>
      
      <div id="Work">
        <Experiences/>
      </div>

      </>
     
    )
  }
  
  export default Home