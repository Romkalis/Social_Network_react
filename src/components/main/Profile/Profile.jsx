import React from "react";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
      <section>
      <ProfileInfo></ProfileInfo>
      <Posts postsData={props.state.postsData}></Posts>
      Content
      </section>
    )
}

export default Profile
