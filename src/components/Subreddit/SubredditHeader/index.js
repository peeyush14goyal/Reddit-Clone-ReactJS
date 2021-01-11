import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";
import { imgSrc } from "../../../mock_data/mock_data";

const SubredditHeader = () => {
  const [title, setTitle] = useState();

  useEffect(() => {
    axios
      .get("https://random-word-api.herokuapp.com/word?number=5")
      .then((res) => {
        res = res.data.join(" ");
        setTitle(res);
      });
  }, []);

  const getImage = () => {
    return (
      <img src={imgSrc + "32"} alt="img" className="subredditHeader__img" />
    );
  };

  return (
    <div className="subredditHeader">
      <div className="subredditHeader__row1"></div>
      <div className="subredditHeader__row2">
        <div className="subredditHeader__imgDiv">{getImage()}</div>
        <div>
          <div className="subreddit_heading">
            <b>{title}</b>
          </div>
          {title && <div>r/{title.substr(0, 10)}</div>}
        </div>
        <div>
          <button className="subredditHeader__button">Joined</button>
        </div>
      </div>
    </div>
  );
};

export default SubredditHeader;
