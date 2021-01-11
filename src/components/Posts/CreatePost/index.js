import React from "react";
import BlackIcon from "../../../assets/images/blackIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const CreatePosts = () => {
  return (
    <div className="createPost">
      <div>
        <img src={BlackIcon} alt="blackIcon" className="createPost__img" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Create post"
          className="createPost__input"
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faImage}
          className="createPost__icon img__icon"
        />
        <FontAwesomeIcon icon={faLink} className="createPost__icon" />
      </div>
    </div>
  );
};

export default CreatePosts;
