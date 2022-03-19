import React, { useState } from 'react';

import Header from './components/header';
import Navigation from './components/navigation';
import AboutMe from './components/about-me';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {

  const [location, setLocation] = useState( "about-me" )

  
  //-- Returning all content
  return ([
  
    <Header></Header>,
    <Navigation
      location={location}
      setLocation={setLocation}
    ></Navigation>,

    <main>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Resume></Resume>
      <Portfolio></Portfolio>
    </main>,

    <footer>
      <div>GitHub</div>
      <div>Linked-In</div>
      <div>Twitter</div>
      <div>Medium</div>
    </footer>
  
  ]);
}

export default App;
