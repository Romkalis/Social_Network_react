import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {setUserProfile}  from "../../../redux/profileReducer";


function ProfileContainer(props) {
  const { userId } = useParams();
  console.log(`USERID=${userId}`)
  const currUserId = userId || 1; // Убедитесь, что currUserId имеет значение по умолчанию

  useEffect(() => {
    // debugger
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${currUserId}`)
      .then((response) => {
        props.setUserProfile(response.data);
        console.log(response.data)
      });
  }, [currUserId]); // Зависимость теперь от currUserId, чтобы запрос выполнялся при изменении userId

  return <Profile profile={props.profile} />;
}


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});


// let withURLDataContainerComponent = withRouter(ProfileContainer) 

export default connect(mapStateToProps, { 
  setUserProfile
})(ProfileContainer)
//(withURLDataContainerComponent)