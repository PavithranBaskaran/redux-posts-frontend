import instance from "../api";
import { ActionTypes } from "./actionType";

export const setRegister = (user) => {
  return {
    type: ActionTypes.SET_REGISTER,
    payload: user,
  };
};

export const setLogin = (user) => {
  return {
    type: ActionTypes.SET_LOGIN,
    payload: user,
  };
};

export const getPost = () => {
  try {
    return async (dispatch) => {
      let res = await instance.get("/api/post/dashboard", {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      // console.log(res.data);
      dispatch({
        type: ActionTypes.GET_POST,
        payload: res.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (post) => {
  try {
    return async (dispatch) => {
      let res = await instance.post("/api/post/dashboard", post, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      // console.log(res.data);
      dispatch({
        type: ActionTypes.ADD_POST,
        payload: res.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
export const deletePOST = (postID) => {
  try {
    return async (dispatch) => {
      let res = await instance.delete(`/api/post/dashboard/${postID}`, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      if (res.data) {
        alert(res.data.message);
      }
      dispatch({
        type: ActionTypes.DELETE_POST,
        payload: res.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
