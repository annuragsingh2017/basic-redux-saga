import { USER_TYPE } from "../types";

export const getusers = (users) => {
  return {
    type: USER_TYPE,
    payload: users,
  };
};
