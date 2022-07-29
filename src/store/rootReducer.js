import { combineReducers } from "redux";
import { positionReducer } from "./positions/position_reducer";
import { filterReducer } from "./filters/filters_reducer";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});
