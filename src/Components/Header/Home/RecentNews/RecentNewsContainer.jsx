import { connect } from "react-redux";
import { getRecentNewsActionCreator, setCurrentPageActionCreator } from "../../../../Reducers/RecentNewsReducer";
import RecentNews from "./RecentNewsClass";
let mapStateToProps = (state) => {
  return {
    news: state.recentNews.news,
    pageSize: state.recentNews.pageSize,
    totalNewsCount: state.recentNews.totalNewsCount,
    currentPage: state.recentNews.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    getNews: (news) => {
      dispatch(getRecentNewsActionCreator(news));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageActionCreator(page))
    }
  };
};

const RecentNewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentNews);
export default RecentNewsContainer;
