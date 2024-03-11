import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  useCookie,
  useDispatch,
  useEncryption,
  useSubscriptionExpiration,
} from "@hooks/all";
import {
  updateUserLoggedIn,
} from "@store/features/authentication/authenticationSlice";
import FullLoading from "@components/FullBackground/FullLoading";

function ProtectedRoute() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { decode } = useEncryption();
  const { getCookie } = useCookie();
  const [isValidating, setIsValidating] = useState(true);
    useSubscriptionExpiration();

  const getAccessToken = () => {
    return decode(getCookie("user_token"));
  };

  const getAuthToken = () => {
    return getAccessToken();
  };

  const hasUserToken = () => {
    return getAuthToken() !== "";
  };

  useEffect(() => {
    if (!hasUserToken()) {
      navigate("/login");
    }
    setIsValidating(false);

    if (getCookie("user_profile")) {
      let profile = {}

      try {
        profile = JSON.parse(decode(getCookie("user_profile")));
      } catch (error) { }

      dispatch(updateUserLoggedIn(profile));
    }

  }, []);

  return (
    <>
      {isValidating ? (
        <FullLoading />
      ) : (
        <div className="">
          <Outlet />
        </div>
      )}
    </>
  );
}

export default ProtectedRoute;
