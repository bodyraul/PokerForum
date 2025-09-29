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
import DivLabelSignUp from './componentsResutilisable/SignUp/DivLabelSignUp';

function App() {
  const {token,settoken,config,pseudo,setpseudo,signIn,setSignIn,signUp,setSignUp,spin,setSpin,errMsgNav, seterrMsgNav}=UseTokenConfig();

  return (
    <div >
      <BrowserRouter>
        <SpinnerContext.Provider value={{spin,setSpin}}>
        <AuthContext.Provider value={{token,settoken,pseudo,setpseudo}}>
          <SigneUpInContext.Provider value={{signIn,setSignIn,signUp,setSignUp,errMsgNav,seterrMsgNav}}>
             <div className="fixed w-screen h-screen bg-vertFoncer z-[60] opacity-[0.5]">
                
             </div>
             <div className="text-vertFoncer bg-blanc border border-vertFoncer w-[400px] h-[600px] fixed left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[60] " >
                <p className="h-[100px] flex items-center justify-center font-bold">Conditions générales d'utilisation</p>
                <div className="VisibleContenuDeux overflow-y-scroll h-[500px] border-t border-t-vertFoncer">
                  <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">Inscription et compte utilisateur :</p>
                  <p className="pl-[15px] pt-[5px] mb-[25px]">- L’inscription au forum nécessite la création d’un compte personnel en fournissant des informations exactes et à jour.</p>
                  <p className="pl-[15px] pt-[5px] mb-[25px]">- L’inscription sur le forum est obligatoire pour participer aux discussions. Chaque utilisateur est responsable de la confidentialité de ses identifiants.</p>
                  <p className="pl-[15px] pt-[5px] mb-[25px]">- Chaque utilisateur est responsable de la confidentialité de ses identifiants et de toute activité effectuée depuis son compte.</p>

                  <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">Respect et bonne conduite :</p>
                  <p className="pl-[15px] mb-[25px]">- Les utilisateurs s’engagent à communiquer de manière respectueuse et à ne pas publier de propos offensants, discriminatoires, injurieux ou diffamatoires.</p>
                  <p className="pl-[15px] mb-[25px]">- Tout comportement de harcèlement, intimidation ou incitation à la haine est strictement interdit sur le forum.</p>
                  <p className="pl-[15px] mb-[25px]">- Les échanges doivent rester courtois et constructifs afin de préserver une atmosphère agréable et bienveillante pour l’ensemble de la communauté.</p>

                  <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">Contenus interdits :</p>
                  <p className="pl-[15px] mb-[25px]">- Il est strictement interdit de partager du contenu illégal, violent, pornographique, ou contraire aux lois en vigueur.</p>

                  <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">Propriété intellectuelle :</p>
                  <p className="pl-[15px] mb-[25px]">- Les utilisateurs conservent les droits sur les contenus qu’ils publient, mais accordent au forum une licence non exclusive, mondiale et gratuite pour les afficher, reproduire et diffuser dans le cadre de son fonctionnement.</p>
                  <p className="pl-[15px] mb-[25px]">- Il est interdit de publier sur le forum des contenus protégés par des droits d’auteur, des marques ou tout autre droit de propriété intellectuelle sans en avoir l’autorisation préalable.</p>

                  <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">Modération :</p>
                  <p className="pl-[15px] mb-[25px]">- L’équipe de modération se réserve le droit de contrôler les contenus publiés afin de veiller au respect des présentes conditions d’utilisation.</p>
                  <p className="pl-[15px] mb-[25px]">- Les modérateurs peuvent modifier, déplacer ou supprimer tout message jugé inapproprié, sans obligation d’en avertir préalablement l’auteur.</p>
                  <p className="pl-[15px] mb-[25px]">- Les décisions de modération sont prises dans l’intérêt de la communauté et ne peuvent être contestées publiquement sur le forum.</p>
                  
                  <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">Suspension et suppression de compte :</p>
                  <p className="pl-[15px] mb-[25px]">- En cas de non-respect des CGU, l’administration du forum pourra suspendre ou supprimer le compte de l’utilisateur concerné.</p>

                  <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">Responsabilité :</p>
                  <p className="pl-[15px] mb-[25px]">- Chaque utilisateur est seul responsable des propos et contenus qu’il publie sur le forum. L’administration du forum ne saurait être tenue responsable des échanges entre membres.</p>

                  <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">Protection des données personnelles :</p>
                  <p className="pl-[15px] mb-[25px]">- Les informations collectées lors de l’inscription sont utilisées uniquement pour le bon fonctionnement du forum et ne seront pas transmises à des tiers sans consentement.</p>

                  <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">Évolutions des CGU :</p>
                  <p className="pl-[15px] mb-[25px]">- Les présentes conditions générales d’utilisation peuvent être modifiées à tout moment. Les utilisateurs seront informés des changements majeurs.</p>

                  <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">Loi applicable :</p>
                  <p className="pl-[15px] mb-[25px]">- Les présentes conditions sont régies par la loi en vigueur dans le pays d’hébergement du forum, et tout litige sera soumis aux juridictions compétentes.</p>
                  <div className="h-[100px] flex items-center justify-evenly">
                    <btn className=" border border-vertFoncer rounded-[10px] px-[10px] py-[5px] transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer " >Accepter</btn>
                    <btn className=" border border-vertFoncer rounded-[10px] px-[10px] py-[5px] transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer " >Refuser</btn>
                  </div>
                </div>
              </div>
            <Navbar/>
            <SignUp/>
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
