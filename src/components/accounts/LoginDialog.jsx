import { Dialog, ListItem, Box } from "@mui/material";
import { qrCodeImage } from "../../constants/data.js";

import { GoogleLogin } from "@react-oauth/google";
import {
  Component,
  Container,
  StyledList,
  dialogStyle,
  QRCode,
  Title,
} from "./LoginDialogStyles.js";

const onLoginSuccess = () => {};

const onLoginError = () => {};

function LoginDialog() {
  return (
    <Dialog open={true} slotProps={{ paper: { sx: dialogStyle } }}>
      {/* Parent Box */}
      <Component>
        {/* Child Box */}
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your computer:</ListItem>
            <ListItem>2. Tap Menu Settings and select WhatsApp web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box>
          <QRCode src={qrCodeImage} alt="bar code" />
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
