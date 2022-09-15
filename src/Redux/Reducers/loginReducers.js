import { ActionTypes } from "../actions/actionType";
import instance from "../api";

export const loginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_REGISTER:
      try {
        const register = async (values) => {
          let res = await instance.post("/api/auth/register", values);
          alert(res.data.message);
        };
        register(payload);
      } catch (error) {
        console.log(error);
      }

      break;

    default:
      return state;
  }
};

export const postReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_POST:
      return {
        ...state,
      };

    case ActionTypes.GET_POST:
      return {
        state: payload,
        ...state,
      };

    case ActionTypes.DELETE_POST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
