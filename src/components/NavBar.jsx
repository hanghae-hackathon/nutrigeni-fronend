import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { accessTokenAtom, userInfoAtom } from "../atom/loginAtom";
import { logoutAPI } from "../api/loginAPI";
import Logo from "../images/Logo.png"

const Nav = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
  display: flex;
  position: fixed;
  background-color: rgb(255, 255, 255, 1);
  z-index: 10;
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 150px;
  a {
    display: inline-block;
    font-size: 20px;
    padding: 19px 20px;
  }

  img {
    width: 60px;
    margin-top: -20px; /* Adjust the value to cut the top */
    margin-bottom: -20px; /* Adjust the value to cut the bottom */
  }
`;


const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 500;
    margin-right: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 20px;
  }
`;

export default function NavBar() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  /* useEffect(() => {
    // 컴포넌트가 마운트될 때 리프레시 토큰 요청
    const fetchAccessToken = async () => {
      try {
        const newAccessToken = await silentRefresh(userInfo, cookies.refreshToken);
        setAccessToken(newAccessToken);
      } catch (error) {
        console.error("Failed to refresh token", error);
      }
    };

    if (!accessToken && cookies.refreshToken) {
      fetchAccessToken();
    }
  }, [accessToken, cookies.refreshToken, setAccessToken]); */

  const handleClickLogin = () => {
    if (accessToken) {
      handleClickLogout();
    } else {
      // 로그인 로직
      navigate("/login");
    }
  };

  const handleClickLogout = () => {
    // 로그아웃 로직
    setAccessToken(null);
    setUserInfo(null);
    removeCookie("refreshToken");
    logoutAPI(userInfo);
    console.log("로그아웃 되었습니다.");
  };

  const handleClickRegister = () => {
    navigate("/register");
  };

  return (
    <Nav>
      <LogoContainer>
        <a href="">
          <img src={Logo} alt="Logo" style={{ width: "60px" }} />
        </a>
      </LogoContainer>
      <SubContainer>
        <ItemContainer>
          <Link to="/">홈</Link>
          <Link to="/image_analysis">식단 기록하기</Link>
          <Link to="/calendar">지난 식단</Link>
          <Link to="/profile">프로필</Link>
        </ItemContainer>
        <ButtonContainer>
          <Button type="primary" onClick={handleClickLogin}>
            {accessToken ? "로그아웃" : "로그인"}
          </Button>
          {!accessToken && (
            <Button type="default" onClick={handleClickRegister}>
          가입하기
            </Button>
          )}
        </ButtonContainer>
      </SubContainer>
    </Nav>
  );
}
