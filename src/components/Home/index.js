import React from "react";
import CreatePosts from "../Posts/CreatePost";
import ShowPosts from "../Posts/ShowPosts";
import TrendingHot from "../Trending/Hot";
import "./styles.scss";
import { posts } from "../../mock_data/mock_data";
import TrendingCommunities from "../Trending/Community";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <div>
          <CreatePosts />
          <ShowPosts posts={posts} />
        </div>
        <div></div>
        <div>
          <TrendingHot />
          <TrendingCommunities />
        </div>
      </div>
    </div>
  );
};

export default Home;

/*https://www.reddit.com/api/v1/authorize?client_id=u3HQJh4Azn1ZEA&response_type=code&state=checkStr&redirect_uri=http://localhost:3000&duration=temporary&scope=read */
