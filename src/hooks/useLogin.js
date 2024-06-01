// useLogin.js
import { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { accessTokenAtom, userInfoAtom } from "../atom/loginAtom";
import { intervalRefAtom } from "../atom/intervalRefAtom";
import { loginAPI } from "../api/loginAPI";
import { silentRefresh } from "../api/silentRefresh";
import { getUser } from "../api/getUser";

export function useLogin() {
  const accessToken = useRecoilValue(accessTokenAtom);
  const setAccessToken = useSetRecoilState(accessTokenAtom);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const intervalRef = useRecoilValue(intervalRefAtom);
  const setIntervalRef = useSetRecoilState(intervalRefAtom);
  const [cookies, setRefreshToken] = useCookies(["refreshToken"]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const data = await loginAPI(email, password);

      // 액세스 토큰 만료 시간 1분 전 다시 갱신
      const interval = setInterval(async () => {
        if (accessToken && cookies.refreshToken) {
          /* const token = await silentRefresh(email, data.refreshToken); */
          if (token) {
            setAccessToken(token);
          } else {
            clearInterval(intervalRef);
          }
        } else {
          clearInterval(intervalRef);
        }
      }, 600000);
      setIntervalRef(interval);

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

  useEffect(() => {
    return () => {
      if (intervalRef) {
        clearInterval(intervalRef);
      }
    };
  }, [intervalRef]);

  return { login, error };
}
