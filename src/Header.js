import React, { PureComponent } from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: red;
  font-family: Verdana;
  font-size: 3em;
  background-color: lavender;
  box-shadow: 5px 5px 5px blueviolet;
  display: inline-block;
`;

class Header extends PureComponent {
  render() {
    return (
      <div className="row">
        <StyledHeader>Connect4 Game</StyledHeader>
      </div>
    );
  }
}

export default Header;
