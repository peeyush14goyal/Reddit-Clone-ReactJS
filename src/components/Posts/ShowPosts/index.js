import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBurn,
  faChartBar,
  faThLarge,
  faEllipsisH,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import Post from "../Post";

const ShowPosts = ({posts}) => {
  return (
    <div className="showPosts">
      <div className="postsTab">
        <div className="postsTab__first">
          <div>
            <FontAwesomeIcon icon={faRocket} className="postsTab__icons" />
            Best
          </div>
          <div>
            <FontAwesomeIcon icon={faBurn} className="postsTab__icons" />
            Hot
          </div>
          <div>
            <FontAwesomeIcon icon={faCertificate} className="postsTab__icons" />
            New
          </div>
          <div>
            <FontAwesomeIcon icon={faChartBar} className="postsTab__icons" />
            Top
          </div>
          <div>
            <FontAwesomeIcon icon={faEllipsisH} className="postsTab__icons" />
          </div>
        </div>
      </div>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default ShowPosts;
