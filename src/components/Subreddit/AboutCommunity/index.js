import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

const AboutCommunity = () => {
  return (
    <div className="aboutCommunity">
      <div className="aboutCommunity__header">
        <div className="aboutCommunity__text">About Community</div>
      </div>
      <div className="aboutCommunity__desc">
        <text>
          Some Random text about community there is. Community Description is
          written over here
        </text>
        <div className="aboutCommunity__values">
          <div>
            <div className="aboutCommunity__numVal">67 k</div>
            <div>React Native devs</div>
          </div>
          <div>
            <div className="aboutCommunity__numVal">205</div>
            <div>Online</div>
          </div>
        </div>
      </div>
      <div className="aboutCommunity__createDiv">
        <div>
          <FontAwesomeIcon icon={faBirthdayCake} /> Created 26 Mar 2015
        </div>
        <div>
          <button className="aboutCommunity__createButton">Create Post</button>
        </div>
      </div>
      <div>
        <div className="aboutCommunity__options">Community Options</div>
      </div>
    </div>
  );
};

export default AboutCommunity;
