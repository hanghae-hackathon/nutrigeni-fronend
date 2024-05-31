import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import useMediaQuary from "../hooks/useMediaQuary";
import imgLogo from "../images/backgground2.jpg"
import NavBar from "./NavBar";


const Container = styled.div`
  max-width: 100%;
  margin: auto;
  overflow-x: hidden;
`;

const ColMain = styled(Col)`
  padding: 30px 15px 0px 15px;
  min-height: 100vh;
  min-width: 500px;
  border-right: 1px solid #e9e9e9;
  border-left: 1px solid #e9e9e9;
  box-shadow: 0 0 30px #f3f1f1;
  margin-top: 80px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Background = styled.div`
  height: inherit;
  position: absolute;
  filter: blur(18px);
  z-index: -1;
  top: 0;
`;

export default function Layout() {
  const { height } = useMediaQuary()

  return (
    <Container>
      <Background>
        <img src={imgLogo} alt="background images" style={{ width: "98vw", height: `${height}px`, opacity: "0.6" }} />
      </Background>
      <NavBar/>
      <Row>
        <ColMain span={18} offset={3}>
          <Outlet />
        </ColMain>
      </Row>
    </Container>
  );
}
