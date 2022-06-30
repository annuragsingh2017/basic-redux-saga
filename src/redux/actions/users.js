import { USER_TYPE } from "../types";

export const getusers = (users) => {
  return {
    type: USER_TYPE,
    payload: users,
  };
};
console.log("Testing For Git Methods In User Action  File");
