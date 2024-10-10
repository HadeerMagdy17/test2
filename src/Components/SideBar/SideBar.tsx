// import React from "react";
// import { CgProfile } from "react-icons/cg";
// import { FaHome, FaUsers, FaUserTie } from "react-icons/fa";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import styles from "./sideBar.module.css"
// import { Link } from "react-router-dom";
// import profile from "../../assets/profile.png"
// export default function SideBar() {
//   return (
//     <div  className={` vh-100  ${styles.sidebarContainer}`}>
//       <Sidebar  className="ps-sidebar-container"
//         style={{ backgroundColor: "transparent", zIndex: 1 }}>
//         <Menu className={` ${styles.transparentBackground}`}>
//           <div className="text-center my-5">
//           <img src={profile} className="w-50 rounded-circle"/>
//           <h5 className=" my-3">Mohamed ahmed</h5>
//           <h6 className="text-warning">admin</h6>
//           </div>

//           <MenuItem icon={<FaHome />} component={<Link to="/dashboard" />}>

//             Home
//           </MenuItem>
//           <MenuItem
//             icon={<FaUsers />}
//             component={<Link to="/dashboard/users-list" />}
//           >

//             Users
//           </MenuItem>
//           <MenuItem
//             icon={<FaUserTie />}
//             component={<Link to="/dashboard/user-data" />}
//           >

//             User Data
//           </MenuItem>
//           <MenuItem
//             icon={<CgProfile />}
//             component={<Link to="/dashboard/profile" />}
//           >

//             Profile
//           </MenuItem>
//         </Menu>
//       </Sidebar>
//       ;
//     </div>
//   );
// }
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import {
  FaHome,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import styles from "./sideBar.module.css";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";

export default function SideBar() {
  let [isCollapsed, setIsCollapsed] = useState(false);
  let toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className={`vh-100 ${styles.sidebarContainer}`}>
      <Sidebar collapsed={isCollapsed} className={` vh-100 `}>
        <Menu>
          <div className="m-4 ">
            {isCollapsed ? 
            <FaRegArrowAltCircleRight onClick={toggleCollapse} size={30}/>
            :
            <FaRegArrowAltCircleLeft onClick={toggleCollapse} size={30} />
          }
            </div>

          <div className="text-center my-5">
            <img src={profile} className="w-50 rounded-circle" alt="Profile" />
            <h6 className="my-3">Mohamed Ahmed</h6>
            <h6 className="text-warning">admin</h6>
          </div>
          <MenuItem icon={<FaHome />} component={<Link to="/dashboard" />}>
            Home
          </MenuItem>
          <MenuItem
            icon={<FaUsers />}
            component={<Link to="/dashboard/users-list" />}
          >
            Users
          </MenuItem>
          <MenuItem
            icon={<FaUserTie />}
            component={<Link to="/dashboard/user-data" />}
          >
            User Data
          </MenuItem>
          <MenuItem
            icon={<CgProfile />}
            component={<Link to="/dashboard/profile" />}
          >
            Profile
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
