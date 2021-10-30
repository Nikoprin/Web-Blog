import React from "react";
import { Link } from "react-router-dom";
import classes from "./RecentNews.module.css";
import * as axios from "axios";
class RecentNews extends React.Component {
  componentDidMount() {
    axios
      .get(
        `http://localhost:8000/news?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`
      ).then((response) => {
        this.props.getNews(response.data);
      });
  }
  changePage = (page) => {
    this.props.setCurrentPage(page);
    axios
    .get(
      `http://localhost:8000/news?_page=${page}&_limit=${this.props.pageSize}`
    )
    .then((response) => {
      this.props.getNews(response.data);
    });
  }
  render() {
    let pagesCount = Math.ceil(this.props.totalNewsCount / this.props.pageSize);
    console.log(pagesCount)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        {this.props.news.map((news) => {
          return (
            <div key={news.id} className={classes.recentNews}>
              <div className={classes.newsImage}>
                <img
                  src={
                    require(`./../../../../Images/NewsImages/RecentNews/Photo${news.imageID}.jpg`)
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
                    <Link to={`/${news.category}/${news.imageID}`}>
                      {news.title}
                    </Link>
                  </div>
                  <div className={classes.description}>
                    <p>{`${news.description}...`}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className={classes.pagination}>
          {pages.map((page) => {
            return (
              <span
                className={
                  this.props.currentPage === page && classes.selectedPage
                }
                onClick={() => this.changePage(page)}
              >
                {page}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RecentNews;
