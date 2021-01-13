import React from "react";
import "./styles.scss";
import TrendingHotIcon from "../../../assets/images/trendingHot.png";
import { trendingHot, imgSrcSquare } from "../../../mock_data/mock_data";

const TrendingHot = () => {
  const getImage = (id) => {
    return (
      <img src={imgSrcSquare + id} alt="img" className="trendingHot__img" />
    );
  };
  return (
    <div>
      <div className="trendingHot__header">
        <div className="trendingHot__imgDiv">
          <img
            src={TrendingHotIcon}
            alt="chairIcon"
            className="trendingHot__haeaderImg"
          />
        </div>
        <div>Trending communities are so hot right now</div>
      </div>
      {trendingHot.map((x) => {
        return (
          <div className="trendingHot__names">
            <div>{getImage(x.id)}</div>
            <div className="trendingHot__text">r/{x.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TrendingHot;
