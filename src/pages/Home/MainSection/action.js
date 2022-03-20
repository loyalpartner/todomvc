import { COMPLETE_ALL_TODOS, CLEAR_COMPLETED } from "src/constants/ActionTypes";


export const completeAllTodos = () => ({ type: COMPLETE_ALL_TODOS });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
