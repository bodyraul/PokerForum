import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MessagePosts from "./pages/MessagePosts";
import Forum from "./pages/Forum";
import Navbar from "./components/nav/Navbar";
import { useState } from "react";
import SignIn from "./components/nav/SignIn";
import SignUp from "./components/nav/SignUp";
import AuthContext from "./Context/AuthContext";
import UseTokenConfig from "./customHoocks/global/UseTokenConfig";

function App() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const {token,settoken,config}=UseTokenConfig();
  const [pseudo, setpseudo] = useState(localStorage.getItem('pseudo')?localStorage.getItem('pseudo'):"" )

  return (
    <div >
      <BrowserRouter>
        <AuthContext.Provider value={{token,settoken}}>
          <Navbar pseudo={pseudo} signInProps={signIn} signUpProps={signUp} setSignUpProps={setSignUp} setSignInProps={setSignIn}/>
          <SignUp signInProps={signIn}   setSignInProps={setSignIn} signUpProps={signUp} setSignUpProps={setSignUp}/>
          <SignIn setpseudo={setpseudo} signInProps={signIn}   setSignInProps={setSignIn}/>
          <Routes>
              <Route path="/" element={<Forum config={config} />} />
              <Route path="/messagePost/:id" element={<MessagePosts/>} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
