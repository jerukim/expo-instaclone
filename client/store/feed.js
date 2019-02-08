const UPDATED_HOME_FEED = 'UPDATED_HOME_FEED';

export const updatedHomeFeed = postIds => ({
  type: UPDATED_HOME_FEED,
  postIds,
});

const defaultState = {};

export default function(state = defaultState, action) {
  switch (action.type) {
    case UPDATED_HOME_FEED:
      return { ...state, ...action.postIds };
    default:
      return state;
  }
}
