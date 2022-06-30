import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../redux/actions/users";
import CardComponants from "./CardComponants";

const UserComponant = () => {
  debugger;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getusers());
  }, []);
  return (
    <div>
      {user?.map((val) => {
        return <CardComponants data={val} key={val.id} />;
      })}
    </div>
  );
};

export default UserComponant;
