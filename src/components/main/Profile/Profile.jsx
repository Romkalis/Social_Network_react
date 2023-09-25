import React from "react";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = ({ postsData }) => {
    return (
      <section>
      <ProfileInfo></ProfileInfo>
      <Posts postsData={postsData}></Posts>
      Content
      </section>
    )
}

export default Profile
