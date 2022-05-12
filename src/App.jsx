import React from "react";
import AuthenticationApp from "./layouts/AuthenticationApp";
import useToken from "./Hook/UseToken";
import UnAuthenticationApp from "./layouts/UnAuthenticationApp";

function App() {
  const [token]=useToken()
  if(token){
    return <AuthenticationApp />
  }else{
    return <UnAuthenticationApp/>
  }
}

export default App;
