import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./RecentNews.module.css";
import * as axios from "axios";
export default function RecentNews(props) {
  let getNews = () => {
    axios.get("http://localhost:8000/news").then((response) => {
      props.getNews(response.data);
    });
  };
  return (
    <div>
      {props.news.map((news) => {
        return (
          <div key={news.id} className={classes.recentNews}>
            <div className={classes.newsImage}>
              <img
                src={
                  require(`./../../../../Images/NewsImages/RecentNews/Photo${news.id}.jpg`)
                    .default
                }
                alt="News Image"
              />
            </div>
            <div className={classes.newsPost}>
              <div className={classes.newsDescription}>
                <div className={classes.category}>
                  <Link to={`/${news.category}`}>{news.category}</Link>
                </div>
                <div className={classes.title}>
                  <Link to={`/${news.category}/${news.id}`}>{news.title}</Link>
                </div>
                <div className={classes.description}>
                  <p>{`${news.description}...`}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};