import React from "react";
import { SocialIcon } from 'react-social-icons';
// import Projects from "../Projects";

function Container ({onClose,currentPhoto}){
  const {name, category, description,index,link , GitRepo} = currentPhoto
    return (

  <div className="modalBackdrop">
  <div className="modalContainer">
    <h3 className="modalTitle ">{name}</h3>
    <img alt="current category" src={require(`../../assets/large/${category}/${index}.jpg`)} />
    <p className="modalTitle">
      {description}
    </p>
                    <p className="modalTitle"> 
                       <SocialIcon className="links1" url={GitRepo} /> Repo 
                      </p>   
    <div className="button p-2">
                     <a className="links2" href={link}>{name}</a> <h4 className="modalTitle"> Click Link For Deployed Application</h4>
                        </div>
    <button onClick={onClose} type="button">
      Close this modal
    </button>
  </div>
</div>
        );
}
export default Container;