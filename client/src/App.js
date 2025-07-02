import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Accueil from "./pages/Accueil";
import MessagePosts from "./pages/MessagePosts";
import Forum from "./pages/Forum";
import Navbar from "./components/Navbar";
import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthContext from "./Context/AuthContext";

function App() {

  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const initToken = localStorage.getItem("token")? localStorage.getItem("token") : "";
  const [token, settoken] = useState(initToken);

  return (
    <div >
      <BrowserRouter>
        <AuthContext.Provider value={{token,settoken}}>
          <Navbar signInProps={signIn} signUpProps={signUp} setSignUpProps={setSignUp} setSignInProps={setSignIn}/>
          <SignUp  signUpProps={signUp} setSignUpProps={setSignUp} />
          <SignIn signInProps={signIn}   setSignInProps={setSignIn} />
          <Routes>
              <Route path="/" element={<Accueil/>} />
              <Route path="/forum" element={<Forum/>} />
              <Route path="/MessagePosts" element={<MessagePosts/>} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
