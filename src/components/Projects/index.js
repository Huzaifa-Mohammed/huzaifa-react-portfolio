import React, { useState } from "react";
import Container from "../Container";

function Projects({ category }) {
  const [photos] = useState([
    {
      name: "Get Fit App",
      category: "backend",
      description:
        "Get-Fit is an application that will randomize your daily or weekly work-outs to focus on strength, cardio, functional fitness and core training.",
        link: "https://kkkaran.github.io/Get-Fit-App/",
        GitRepo: "https://github.com/Huzaifa-Mohammed/get-fit"

    },
    {
      name: "Pizza Hunt",
      category: "backend",
      description:
        "Pizza Hunt is an application based on Mongo Db.",
        link:"https://pizza-hunt-huzaifa.herokuapp.com/",
        GitRepo: "https://github.com/Huzaifa-Mohammed/pizza-hunt"
    },
    {
      name: "Weather Api",
      category: "backend",
      description:
        "Watch  Five day Weather forecast of any City in the world",
        link:"https://huzaifa-mohammed.github.io/Weather-dashboard-Api/",
        GitRepo: "https://github.com/Huzaifa-Mohammed/Weather-dashboard-Api"
    },
    {
        name: "Password Generator Js",
        category: "frontend",
        description:
          "Generates Random Password for you",
          link:" https://huzaifa-mohammed.github.io/password-generator-challenge/",
          GitRepo: "https://github.com/Huzaifa-Mohammed/password-generator-challenge"
      },
      {
        name: "Quiz App",
        category: "frontend",
        description:
          "Quiz Application based on programming",
          link: "https://huzaifa-mohammed.github.io/quiz-test/",
          GitRepo :"https://github.com/Huzaifa-Mohammed/quiz-test"
      },
      {
        name: "Robot Gladiators",
        category: "frontend",
        description:
          "Under Construction",
          GitRepo :"https://github.com/Huzaifa-Mohammed/robot-gladiators"
      },
      {
        name: "Run Buddy",
        category: "frontend",
        description:
          "A Full fledged HTML CSS responsive Gym Website",
          link:"https://huzaifa-mohammed.github.io/run-buddy/",
          GitRepo: "https://github.com/Huzaifa-Mohammed/run-buddy"
      },
    
    {
      name: "Jibber Jabber",
      category: "fullstack",
      description:"A Real Time Chatting Application",
      link :"https://jibber-jabber-app.herokuapp.com/",
      GitRepo:"https://github.com/Huzaifa-Mohammed/Jibber-Jabber"
    },
    {
        name: "Petbook Social Media App",
        category: "fullstack",
        description:
          "Social Media Platform For our beloved pets",
          link: "https://infinite-escarpment-26658.herokuapp.com/",
          GitRepo: "https://github.com/Huzaifa-Mohammed/group6-social-media"
      },
      
    
  ]);
  const currentPhotos = photos.filter((photo) => photo.category === category);
  //We'll use the useState Hook in the PhotoList component to
  //manage the current photo state and make this data accessible to the Modal

  const [currentPhoto, setCurrentPhoto] = useState();
  const [isContainerOpen, SetIsModalOpen] = useState(false);
  // we want to open the modal when a user has clicked on an image.
  //We'll do that by modifying the click handler, toggleContainer,
  // so that it updates the isContainerOpen value to true.
  
  const toggleContainer = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    SetIsModalOpen(!isContainerOpen);
  };
  return (
    <div>
      {/* we can pass in currentPhoto as a prop to the Modal */}
      {/* only render the Container if the value isContainerOpen is true, */}
      {isContainerOpen && (
      <Container currentPhoto={currentPhoto} onClose={toggleContainer} />)}
      <div className="flex-row picture">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleContainer(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
