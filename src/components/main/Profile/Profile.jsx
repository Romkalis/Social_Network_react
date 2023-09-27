import React from "react";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
      <section>
      <ProfileInfo></ProfileInfo>
      <Posts 
        postsData={props.profilePage.postsData} 
        newPostText={props.profilePage.newPostText} 
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText} 
      />
      Content
      </section>
    )
}

export default Profile
