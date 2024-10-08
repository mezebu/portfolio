import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledAboutWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#D5FAFC" : "#063159",
}));

export const StyledIcon = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: 3,
});
