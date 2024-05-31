import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { accessTokenAtom } from "../atom/loginAtom";

export default function PrivateRoute({ children }) {
  const accessToken = useRecoilValue(accessTokenAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return accessToken ? children : null;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
