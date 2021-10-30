const GET_RECENT_NEWS = "GET_RECENT_NEWS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let initialState = {
  news: [],
  pageSize: 5,
  totalNewsCount: 21,
  currentPage: 1
};

let recentNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECENT_NEWS: {
      return {
        ...state,
        news: action.news,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    default: {
      return state;
    }
  }
};

export const getRecentNewsActionCreator = (news) => ({
  type: GET_RECENT_NEWS,
  news,
});
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export default recentNewsReducer;
