import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <section>
      <ProfileInfo></ProfileInfo>
      <PostsContainer
        postsData={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
      Content
    </section>
  );
};

export default Profile;
