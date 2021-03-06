import React, {useState} from "react";
import close from "../../../assets/close.svg";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import Done from "./Done";

const PopupLogActions = ({ isLogActionsOpen, setIsLogActionsOpen, setWhatOpen, whatOpen }) => {

  const [resetEmail, setResetEmail] = useState("")

  const cancelHeaderPopupClose = (e) => {
    e.stopPropagation()
  }

  return (
    <div onClick={() => setIsLogActionsOpen(false)} className={isLogActionsOpen ? "HeaderPopupWrapper active" : "HeaderPopupWrapper"}>
      <Login setIsLogActionsOpen={setIsLogActionsOpen} cancelHeaderPopupClose={cancelHeaderPopupClose} whatOpen={whatOpen} setWhatOpen={setWhatOpen} />
      {/*<Registration isLogActionsOpen={isLogActionsOpen} setIsLogActionsOpen={setIsLogActionsOpen} cancelHeaderPopupClose={cancelHeaderPopupClose} whatOpen={whatOpen} setWhatOpen={setWhatOpen} />*/}
      <ForgotPassword setResetEmail={setResetEmail} isLogActionsOpen={isLogActionsOpen} setIsLogActionsOpen={setIsLogActionsOpen} cancelHeaderPopupClose={cancelHeaderPopupClose} whatOpen={whatOpen} setWhatOpen={setWhatOpen} />
      <Done resetEmail={resetEmail} isLogActionsOpen={isLogActionsOpen} setIsLogActionsOpen={setIsLogActionsOpen} cancelHeaderPopupClose={cancelHeaderPopupClose} whatOpen={whatOpen} setWhatOpen={setWhatOpen} />
    </div>
  );
};

export default PopupLogActions;
