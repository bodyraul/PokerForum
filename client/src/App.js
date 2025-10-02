import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MessagePosts from "./pages/MessagePosts";
import Forum from "./pages/Forum";
import Navbar from "./components/nav/Navbar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import AuthContext from "./Context/AuthContext";
import UseTokenConfig from "./customHoocks/global/UseTokenConfig";
import SigneUpInContext from "./Context/SIgneUpInContext";
import SpinnerContext from "./Context/SpinnerContext";
import Confidentialites from "./components/confidentialite/Confidentialites";

function App() {
  const {token,settoken,config,pseudo,setpseudo,signIn,setSignIn,signUp,setSignUp,spin,setSpin,errMsgNav, seterrMsgNav,
    confidentialite,setconfidentialite}=UseTokenConfig();

  return (
    <div >
      <BrowserRouter>
        <SpinnerContext.Provider value={{spin,setSpin}}>
        <AuthContext.Provider value={{token,settoken,pseudo,setpseudo,confidentialite,setconfidentialite}}>
          <SigneUpInContext.Provider value={{signIn,setSignIn,signUp,setSignUp,errMsgNav,seterrMsgNav}}>
            {confidentialite? <Confidentialites/>:""}
            <Navbar/>
            {signUp? <SignUp/>:""}
            <SignIn/>
          </SigneUpInContext.Provider>
          <Routes>
              <Route path="/" element={<Forum config={config} />} />
              <Route path="/messagePost/:id" element={<MessagePosts/>} />
          </Routes>
        </AuthContext.Provider>
        </SpinnerContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
