import {
  START_FETCHING_JOBS,
  ERROR_FETCHING_JOBS,
  SUCCESS_FETCHING_JOBS,
  SET_DESCRIPTION,
  SET_LOCATION,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
  description: "",
  location: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_JOBS:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_JOBS:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_JOBS:
      return {
        ...state,
        status: statuslist.success,
        data: action.jobs,
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.description,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };
    default:
      return state;
  }
}
