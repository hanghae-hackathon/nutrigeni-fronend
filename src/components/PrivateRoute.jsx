import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { accessTokenAtom } from "../atom/loginAtom";

export default function PrivateRoute({ element: Component }) {
  const accessToken = useRecoilValue(accessTokenAtom);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(accessToken);
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return accessToken ? Component : null;
}

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};
