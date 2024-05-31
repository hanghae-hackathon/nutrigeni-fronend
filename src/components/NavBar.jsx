import { Button } from "antd";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { accessTokenAtom, userInfoAtom } from "../atom/loginAtom";
import { logoutAPI } from "../api/loginAPI";

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
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const userInfo = useRecoilValue(userInfoAtom);

  const handleClickLogin = () => {
    if (accessToken) {
      handleClickLogout();
    } else {
      // 로그인 로직
      setAccessToken(accessToken);
      console.log("로그인 되었습니다.");
    }
  };

  const handleClickLogout = () => {
    // 로그아웃 로직
    setAccessToken(null);
    logoutAPI(userInfo);
    console.log("로그아웃 되었습니다.");
  };

  const handleClickRegister = () => {
    navigate("/register");
  };

  return (
    <Nav>
      <LogoContainer>
        <a href="">Logo</a>
      </LogoContainer>
      <SubContainer>
        <ItemContainer>
          <Link to="/">홈</Link>
          <Link to="/image_analysis">식단 기록하기</Link>
          <Link to="/profile">프로필</Link>
        </ItemContainer>
        <ButtonContainer>
          <Button type="primary" onClick={handleClickLogin}>
            {accessToken ? "로그아웃" : "로그인"}
          </Button>
          <Button type={"default"} onClick={handleClickRegister}>
            가입하기
          </Button>
        </ButtonContainer>
      </SubContainer>
    </Nav>
  );
}
