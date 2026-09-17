import { AppBar, Box, Toolbar, styled } from "@mui/material";

import LoginDialog from "./accounts/LoginDialog";

// we can override the style doing as follows
const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;
const Header = styled(AppBar)`
  height: 25vh;
  background-color: #00bfa5;
  box-shadow: none;
`;

export default function Messanger() {
  return (
    <Component>
      <Header>
        <Toolbar />
      </Header>
      <LoginDialog />
    </Component>
  );
}
