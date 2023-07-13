import {
  START_FETCHING_JOBS,
  SUCCESS_FETCHING_JOBS,
  ERROR_FETCHING_JOBS,
  SET_DESCRIPTION,
  SET_LOCATION,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/action";

let debouncedFetchJobs = debounce(getData, 1000);

// START
export const startFetchingJobs = () => {
  return {
    type: START_FETCHING_JOBS,
  };
};

// SUCCESS
export const successFetchingJobs = ({ jobs }) => {
  return {
    type: SUCCESS_FETCHING_JOBS,
    jobs,
  };
};

export const errorFetchingJobs = () => {
  return {
    type: ERROR_FETCHING_JOBS,
  };
};

export const fetchjobs = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingJobs());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 3000);

      let params = {
        description: getState().jobs?.description,
        location: getState().jobs?.location,
      };
      let res = await debouncedFetchJobs("/jobs", params);
      console.log(res);
      dispatch(
        successFetchingJobs({
          jobs: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingJobs());
    }
  };
};

export const setDescription = (description) => {
  return {
    type: SET_DESCRIPTION,
    description,
  };
};

export const setLocation = (location) => {
  return {
    type: SET_LOCATION,
    location,
  };
};
