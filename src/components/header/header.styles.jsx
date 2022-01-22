import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  box-shadow: 5px 2px 2px 2px darkgray;
  height: 100%;
  width: 70px;
  padding: 25px;
  .logo {
    left: 50%;
    top: 50%;
    transform: translate(-30%, -40%);
    display: block;
    justify-content: center;
    width: auto;
    height: auto;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 2px 2px 2px darkgray;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
