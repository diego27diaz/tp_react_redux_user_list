const initialState = {
  articles: [],
  clients: []
};

function articlesReducer(state = initialState, action: any) {
  if (action.type === "ADD_ARTICLE") {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === "ADD_CLIENT") {
    return Object.assign({}, state, {
      clients: state.clients.concat(action.payload)
    });
  }

  return state;
}

export default articlesReducer;