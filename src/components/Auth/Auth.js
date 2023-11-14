import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store";
import AuthForm from "./AuthForm";
import { sendUserAuthRequest } from "../../api.helpers/api-helpers";
const Auth = () => {
  const dispatch = useDispatch();
  const onResRecieved =(data) => {
    console.log(data);
    dispatch(userActions.login())
    localStorage.setItem("userId",data.id);
  }


  const getData = (data) => {
    console.log(data);
    sendUserAuthRequest(data.inputs, data.signup)
      .then(onResRecieved)
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};
export default Auth;
