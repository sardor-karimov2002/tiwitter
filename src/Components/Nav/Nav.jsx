import React from 'react';
import { NavLink ,Link} from 'react-router-dom';
import vector from "../../Assets/img/Vector.png";
import Vector1 from "../../Assets/img/Vector1.png"
import Vector2 from "../../Assets/img/Vector2.png"
import Vector3 from "../../Assets/img/Vector3.png"
import Vector4 from "../../Assets/img/Vector4.png"
import lists from "../../Assets/img/lists.png"
import profile from "../../Assets/img/profilefill.png";
import More from '../../Assets/img/more.png';
import  logo from '../../Assets/img/twitter-logo.png';
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="li">
          <NavLink className="link" to="//">
            <img src={logo} alt="" />
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="link" to="/">
            <img src={vector} alt="" />
            <b>Home</b>
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="link" to="/About">
            <img src={Vector1} alt="" />
            <b>Explore</b>
          </NavLink>
        </li>
       <li className="li">
          <NavLink className="link" to="/Notifications">
            <img src={Vector2} alt="" />
            <b>Notifications</b>
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="link" to="/Messages">
            <img src={Vector3} alt="" />
            <b>Messages</b>
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="link" to="/Bookmarks">
            <img src={Vector4} alt="" />
            <b>Bookmarks</b>
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="link" to="/Lists">
            <img src={lists} alt="" />
            <b>Lists</b>
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="link" to="/Profile">
            <img src={profile} alt="" />
            <b>Profile</b>
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="link" to="/More">
            <img src={More} alt="" />
            <b>More</b>
          </NavLink>
        </li> 

        <li className="li">
          <Link className="link" to="/LogOut">
            <button>Tweet</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
