import React from "react";
import TopBar from "../../components/topBar/TopBar";
import SideBar from "../../components/slider/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <div className="profileLeftSide">
          <SideBar />
        </div>
        <div className="profileRightSide">
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src="assets/post/3.jpeg"
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src="assets/person/7.jpeg"
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
