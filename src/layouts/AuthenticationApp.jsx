import React from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Nav from "../Components/Nav/Nav";
import {Routes,Route} from "react-router-dom";
import LogOut from "../Pages/LogOut/LogOut";
import Box from "../Components/Box/Box";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import Messages from "../Pages/Messages/Messages";
import Profile from "../Pages/Profile/Profile"; 
import More from "../Pages/More/More";
import Notifications from "../Pages/Notifications/Notifications";
import Lists from "../Pages/Lists/Lists"
// import "./Login.css"
function AuthenticationApp() {
  return (
    <div className="App">
      <Nav/>
     <Routes>
       <Route  path="/" element={<Home/>} />
       <Route  path="/About" element={<About/>}/>
       <Route  path="/Bookmarks" element={<Bookmarks/>}/>
       <Route  path="/Messages" element={<Messages/>}/>
       <Route path="/Lists" element={<Lists />}/>
       <Route path="/Profile" element={<Profile/>}/>
       <Route path="/More" element={<More/>}/>
       <Route path="/Notifications" element={<Notifications/>}/>
       <Route path="/LogOut" element={<LogOut/>}/>
     </Routes>
      <Box/>
    </div>
  );
}

export default AuthenticationApp ;
