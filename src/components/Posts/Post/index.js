import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faLeaf,
  faGift,
  faCommentAlt,
  faShare,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { desc, imgSrc } from "../../../mock_data/mock_data";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [vote, setVote] = useState(0);
  const [data, setData] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    axios.get(desc).then((res) => {
      if (res.data[0].length > 300) {
        setData(res.data[0].substr(0, 300) + "...");
      } else {
        setData(res.data[0]);
      }
    });

    axios
      .get("https://random-word-api.herokuapp.com/word?number=3")
      .then((res) => {
        res = res.data.join(" ");
        setTitle(res);
      });
  }, []);

  const getImage = () => {
    return <img src={imgSrc + post.id} alt="img" />;
  };

  return (
    <div className="post">
      <div className="post__vote">
        <div>
          <FontAwesomeIcon
            icon={faArrowAltCircleUp}
            onClick={() => setVote(vote + 1)}
            className="post__voteIcon"
          />
        </div>
        <div>
          <b>{vote}</b>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            onClick={() => setVote(vote - 1)}
            className="post__voteIcon"
          />
        </div>
      </div>
      <div>
        <div className="post__header">
          <span>
            <FontAwesomeIcon icon={faLeaf} className="post__leafIcon" />{" "}
            <Link to={`/${post.subreddit}`}>
              <b>r/{post.subreddit}</b>{" "}
            </Link>
            <text className="post__headerGray">
              {" : "} Posted by u/{post.posted_by} {post.hours_time} hours ago
            </text>
          </span>
        </div>
        <div>
          <div className="post__title">{title}</div>
          <div className="post__text">{data}</div>
          {getImage()}
        </div>
        <div className="post__footer">
          <div>
            <FontAwesomeIcon
              icon={faCommentAlt}
              className="post__footer__iconComment"
            />
            5 comments
          </div>
          <div>
            <FontAwesomeIcon icon={faGift} /> Give Award
          </div>
          <div>
            <FontAwesomeIcon icon={faShare} /> Share
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} /> Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
