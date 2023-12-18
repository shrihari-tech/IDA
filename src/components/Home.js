import React from 'react';
import Header from './Header';
import Service from './Service';
import Process from './Process';
import Whyus from './Whyus';
import Projects from './Projects';
import Footer from './Footer';
function Home() {
    return (
      <div>
        {/* <Header /> */}
        <Whyus />
        <Service />
        <Process />
        <Projects />
        {/* <Footer/> */}
      </div>
    );
  }
  
export default Home;