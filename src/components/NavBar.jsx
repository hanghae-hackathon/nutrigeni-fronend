import { Button } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const handleClickLogin = () => {
    navigate("/login");
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
          <a href="/">홈</a>
          <a href="/image_analysis">식단 기록하기</a>
          <a href="/profile">프로필</a>
        </ItemContainer>
        <ButtonContainer>
          <Button type={"primary"} onClick={handleClickLogin}>
            로그인
          </Button>
          <Button type={"default"} onClick={handleClickRegister}>
            가입하기
          </Button>
        </ButtonContainer>
      </SubContainer>
    </Nav>
  );
}
