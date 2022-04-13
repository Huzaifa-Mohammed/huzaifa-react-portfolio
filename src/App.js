import React, { useState } from 'react';
import Nav from './components/Nav';
//  import About from './components/About';
//  import Projects from './components/Projects';
import Contact from './components/Contact';
import Main from './components/Main'
import Footer from './components/Footer';

function App() {
  const [contactSelected,setContactSelected]= useState(false);
  const [categories] = useState([
    {
      name: 'frontend',
      description: ' A front-end applications which creates websites and applications using web languages such as HTML, CSS, and JavaScript allow users to access and interact with the site or app.',
    },
    { name: 'backend', description: 'back end development focuses on the side of a website users cant see (the server side).' },
    { name: 'fullstack', description: 'Full-stack refers to a group of programming languages and tools a developer learns to handle both the front-end and back-end development of a website' },
    {name: 'About', description: 'I am a Full-Stack Developer graduated from Coding Boot camp of University of Toronto and a bachelor’s degree in computer science from Algoma University. Following high school, I received a DASH certification, which sparked my interest in programming, and web development. I learned coding and algorithm skills throughout my full-stack development program at the University of Toronto. I have knowledge of following languages and programs: Web development, HTML, CSS, JavaScript, NodeJs, ExpressJs, Popular library React, UX Designing, SQL Databases, MONGO DB, MERN Stack Projects, Java, Kotlin, Android Programming, Assembly Language, RESTful APIs and last but not least Git Commands. which has helped me to develop a solid coding-focused approach to a Full stack developer Career. Kindly browse through my portfolio to explore some of the projects I completed!.'}
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected = {contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          { !contactSelected ? (
            <>
            <Main currentCategory={currentCategory}></Main>
            {/* <About></About> */}
            </>
          ): (
            
            <Contact></Contact>
          )
          }
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

