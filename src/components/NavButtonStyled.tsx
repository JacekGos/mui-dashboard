// import styled from "@emotion/styled";
import { styled } from "@mui/material/styles";

import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import orange from "@mui/material/colors/orange";

export const NavButtonStyled = styled(Button)(() => ({
  color: "#5a5a5a",
  fontWeight: 600,
  border: "1px solid #dbd8d8",
  background: "#e6e6e3",
  height: 30,
  borderRadius: 3,
  paddingLeft: 7,
  paddingRight: 7,
  "&:hover": {
    background: "#FFC957",
    color: "#666666",
    border: '1px solid #FFC957',
  },
}));
