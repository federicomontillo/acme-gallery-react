import React, { useState, useEffect } from 'react';

import { Card } from '../card/Card';
import { SearchBar } from '../searchBar/SearchBar';

export const Gallery = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("db-articles.json")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  const cardArticles = articles.map((article) => (
    <Card key={article.id} article={article} />
  ));

  return (
    <>
      <SearchBar />
      <div className="galery__container">{cardArticles}</div>
      <div className="galery__load-more">
        <a href="#">Load More</a>
      </div>
    </>
  );
};
