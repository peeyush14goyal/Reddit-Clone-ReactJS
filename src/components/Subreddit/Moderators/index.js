import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Moderators = () => {
  const [moderator, setModerator] = useState();

  useEffect(() => {
    axios
      .get("https://random-word-api.herokuapp.com/word?number=8")
      .then((res) => {
        setModerator(res.data);
      });
  }, []);

  return (
    <div className="moderators">
      <div className="moderators__header">
        <div className="moderators__text">Moderators</div>
      </div>
      <div className="moderators__buttonDiv">
        <button className="moderators__button">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="moderators__buttonIcon"
          />
          Message the mods
        </button>
      </div>
      <div className="moderators__div">
        {moderator &&
          moderator.map((mod) => {
            return <div className="moderators__mod">u/{mod}</div>;
          })}
      </div>
      <div className="moderators__viewAll">
        <a href="#javascript">VIEW ALL MODERATORS</a>
      </div>
    </div>
  );
};

export default Moderators;
