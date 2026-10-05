import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Messanger from "./components/Messanger.jsx";

// to implement googleAuth we have to cover our entire application from "GoogleAuthProvider"

const clientId = "";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messanger />
    </GoogleOAuthProvider>
  );
}

export default App;
