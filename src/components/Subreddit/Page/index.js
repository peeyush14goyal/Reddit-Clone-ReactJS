import React from "react";
import CreatePosts from "../../Posts/CreatePost";
import ShowPosts from "../../Posts/ShowPosts";
import AboutCommunity from "../AboutCommunity";
import FilterByFlair from "../FilterByFlair";
import Moderators from "../Moderators";
import SubredditHeader from "../SubredditHeader";

const SubRedditPage = ({ subreddit }) => {
  return (
    <>
      <SubredditHeader />
      <div className="home__content">
        <div>
          <CreatePosts />
          <ShowPosts posts={subreddit.posts} />
        </div>
        <div></div>
        <div>
          <AboutCommunity />
          <FilterByFlair />
          <Moderators />
        </div>
      </div>
    </>
  );
};

export default SubRedditPage;
