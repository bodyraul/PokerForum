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

function App() {
  const {token,settoken,config,pseudo,setpseudo,signIn,setSignIn,signUp,setSignUp}=UseTokenConfig();

  return (
    <div >
      <BrowserRouter>
        <AuthContext.Provider value={{token,settoken,pseudo,setpseudo}}>
          <SigneUpInContext.Provider value={{signIn,setSignIn,signUp,setSignUp}} >
            <Navbar />
            <SignUp/>
            <SignIn/>
          </SigneUpInContext.Provider>
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
