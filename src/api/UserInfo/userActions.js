import { FETCH_USER_INFO } from "./userTypes";
import axios from "axios";

const baseUrl = "https://www.reddit.com";

const fetchUserInfo = (data) => {
  return {
    type: FETCH_USER_INFO,
    payload: data,
  };
};

export const fetchUserData = () => {
  return (dispatch) => {
    axios.get(baseUrl + "/best").then((response, error) => {
      console.log("Response is ", response);
      dispatch(fetchUserInfo(response.data));
    });
  };
};
