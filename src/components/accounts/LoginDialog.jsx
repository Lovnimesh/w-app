import { Dialog } from "@mui/material";
import styles from "./LoginDialog.module.css";

function LoginDialog() {
  return (
    <Dialog open={true} className={styles.dialog}>
      Hello
    </Dialog>
  );
}

export default LoginDialog;
