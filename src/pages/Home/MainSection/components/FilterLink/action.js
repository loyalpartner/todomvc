import * as types from "src/constants/ActionTypes";

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});
