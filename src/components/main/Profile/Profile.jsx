import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <section>
      <ProfileInfo></ProfileInfo>
      <PostsContainer
        store={props.store}
      />
      Content
    </section>
  );
};

export default Profile;
