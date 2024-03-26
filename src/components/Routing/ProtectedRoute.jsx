import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  useCookie,
  useEncryption,
} from "@hooks";
import {
  updateUserLoggedIn,
} from "@store/features/authentication/authenticationSlice";

import FullLoading from "@components/FullBackground/FullLoading";
import MainLayout from '@components/Layout/MainLayout';

function ProtectedRoute() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const { decode } = useEncryption();
  const { getCookie } = useCookie();
  const [isValidating, setIsValidating] = useState(true);

  const getAccessToken = () => {
    console.log(decode(getCookie("admin_token")))
    return decode(getCookie("admin_token"));
  };

  useEffect(() => {
    if (getAccessToken() == '') { 
      navigate("/login");
    }
    setIsValidating(false);

    if (getCookie("admin_profile")) {
      let profile = {}

      try {
        profile = JSON.parse(decode(getCookie("admin_profile")));
      } catch (error) { }

      dispatch(updateUserLoggedIn(profile));
    }

  }, []);

  return (
    <>
      {isValidating ? (
        <FullLoading  loadingText='C H E C K I N G' />
      ) : (
        <div>
          <MainLayout />
        </div>
      )}
    </>
  );
}

export default ProtectedRoute;
