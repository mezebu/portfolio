import { Box } from "@mui/material";

import { styled } from "@mui/material/styles";

export const StyledProgressBar = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: -1,
  left: 0,
  right: 0,
  height: 2,
  background: theme.palette.primary.light,
  transformOrigin: "0%",
}));
