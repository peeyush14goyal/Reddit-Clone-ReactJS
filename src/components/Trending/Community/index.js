import React from "react";
import "./styles.scss";
import { trendingCommunties, imgSrcSquare } from "../../../mock_data/mock_data";

const TrendingCommunities = () => {
  const getImage = (id) => {
    return (
      <img
        src={imgSrcSquare + id}
        alt="img"
        className="trendingCommunities_img"
      />
    );
  };

  return (
    <div>
      <div className="trendingCommunities">
        <div className="tredningCommunities__header">Trending Communities</div>
        <div>
          {trendingCommunties.map((obj) => {
            return (
              <div className="trendingCommunities_community">
                <div className="trendingCommunities__imgDiv">
                  {getImage(obj.id)}
                </div>
                <div>
                  <div className="trendingCommunities__name">r/{obj.name}</div>
                  <div className="trendingCommunities_members">
                    {obj.members} members
                  </div>
                </div>
                <div>
                  <button className="trendingCommunity_button">Join</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendingCommunities;
