import React from "react";
import styled from "styled-components";
import { device } from "../layout/breakpoints";
import colors from "../layout/Colors";

export const Hello = styled.h2`
  color: ${colors.blue[800]};
  font-family: "pelak";
  @media ${device.mobileS || device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
  }
`;
