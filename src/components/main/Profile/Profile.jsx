import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
 console.log(props)
  return (
    <section>
      <ProfileInfo profile={props.profile}></ProfileInfo>
      <PostsContainer
        store={props.store}
      />
      Content
    </section>
  );
};

export default Profile;
