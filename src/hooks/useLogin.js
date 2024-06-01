// useLogin.js
import { useState, useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { accessTokenAtom, userInfoAtom } from "../atom/loginAtom";
import { loginAPI } from "../api/loginAPI";
import { silentRefresh } from "../api/silentRefresh";
import { getUser } from "../api/getUser";

export function useLogin() {
  const accessToken = useRecoilValue(accessTokenAtom);
  const setAccessToken = useSetRecoilState(accessTokenAtom);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const [cookies, setRefreshToken] = useCookies(["refreshToken"]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  const login = async (email, password) => {
    try {
      const data = await loginAPI(email, password);

      // 액세스 토큰 만료 시간 1분 전 다시 갱신
      intervalRef.current = setInterval(async () => {
        if (accessToken && cookies.refreshToken) {
          const token = await silentRefresh(email, data.refreshToken);
          if (token) {
            setAccessToken(token);
          } else {
            clearInterval(intervalRef.current);
          }
        } else {
          clearInterval(intervalRef.current);
        }
      }, 60000);

      setAccessToken(data.accessToken);
      setRefreshToken("refreshToken", data.refreshToken);
      navigate("/");

      // const userData = await getUser(data.accessToken);
      setUserInfo(email);
    } catch (error) {
      setError("Please check your ID and password");
      alert("Please check your ID and password");
    }
  };

  return { login, error };
}
