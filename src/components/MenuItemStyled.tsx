import { styled } from "@mui/material/styles";

import { Button, MenuItem } from "@mui/material";
import { red } from "@mui/material/colors";
import orange from "@mui/material/colors/orange";

export const MenuItemStyled = styled(MenuItem)(() => ({
  "&:hover": {
    background: "#FFC957",
  },
}));
