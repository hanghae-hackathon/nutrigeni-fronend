// useLogin.js
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { accessTokenAtom, userInfoAtom } from "../atom/loginAtom";
import { loginAPI } from "../api/loginAPI";
import { silentRefresh } from "../api/silentRefresh";
import { getUser } from "../api/getUser";

export function useLogin() {
  const setAccessToken = useSetRecoilState(accessTokenAtom);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const [, setRefreshToken] = useCookies(["refreshToken"]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const data = await loginAPI(email, password);

      // 액세스 토큰 만료 시간 1분 전 다시 갱신
      setInterval(async () => {
        const token = await silentRefresh(data.refreshToken);
        setAccessToken(token);
      }, process.env.REACT_JWT_EXPIRY_TIME - 60000);

      setAccessToken(data.accessToken);
      setRefreshToken("refreshToken", data.refreshToken);
      navigate("/");

      const userData = await getUser(data.accessToken);
      setUserInfo(userData);
    } catch (error) {
      setError(t("Please check your ID and password"));
      alert(t("Please check your ID and password"));
    }
  };

  return { login, error };
}
