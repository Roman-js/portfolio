import React from 'react';
import './App.css';
import Header from "./01_Header/Header";
import Main from "./02_Main/Main";
import Skills from "./03_Skills/Skills";
import Projects from "./04_Projects/Projects";
import Contacts from "./05_Contacts/Contacts";
import Footer from "./06_Footer/Footer";

const App = () => {

  return (
    <div>

      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>

    </div>
  );
}

export default App;
