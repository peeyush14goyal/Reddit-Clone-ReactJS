import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";

const FilterByFlair = () => {
  const [flair_words, setFlairWords] = useState();

  useEffect(() => {
    axios
      .get("https://random-word-api.herokuapp.com/word?number=8")
      .then((res) => {
        setFlairWords(res.data);
      });
  }, []);
  return (
    <div className="filterByFlair">
      <div className="filterByFlair__header">
        <div className="filterByFlair__text">Filter By Flair</div>
      </div>
      <div className="filterByFlair__div">
        {flair_words &&
          flair_words.map((word) => {
            return <button className="filterByFlair__flair">{word}</button>;
          })}
      </div>
    </div>
  );
};

export default FilterByFlair;
