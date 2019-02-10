const UPDATED_HOME_FEED = 'UPDATED_HOME_FEED';
const REMOVE_HOME_FEED = 'REMOVE_HOME_FEED';

export const updatedHomeFeed = postIds => ({
  type: UPDATED_HOME_FEED,
  postIds,
});
export const removeHomeFeed = () => ({ type: REMOVE_HOME_FEED });

const defaultState = {};

export default function(state = defaultState, action) {
  switch (action.type) {
    case UPDATED_HOME_FEED:
      return { ...state, ...action.postIds };
    case REMOVE_HOME_FEED:
      return defaultState;
    default:
      return state;
  }
}
