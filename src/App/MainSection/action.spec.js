import * as types from "../../constants/ActionTypes";
import * as actions from "./action";

describe("todo actions", () => {
  it("completeAll should create COMPLETE_ALL action", () => {
    expect(actions.completeAllTodos()).toEqual({
      type: types.COMPLETE_ALL_TODOS,
    });
  });

  it("clearCompleted should create CLEAR_COMPLETED action", () => {
    expect(actions.clearCompleted()).toEqual({
      type: types.CLEAR_COMPLETED,
    });
  });
});
