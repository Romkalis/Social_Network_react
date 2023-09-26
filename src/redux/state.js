

export let state = {}


    state.profilePage = {
        postsData: [
            {id: 1, post: "Hey! I'm First", like: 5},
            {id: 2, post:"Ololo trololo im driver NLO", like: 25},
            {id: 3, post:"wof wof?", like: 15},
            {id: 4, post:"Meow", like: 2},
            {id: 5, post:"Hi guys, how are your tails?", like: 1},
        ],
    }
    
    state.messagesPage = {
        messagesData: [
            {id: 1, text: "Hey! I'm First"},
            {id: 2, text:"Ololo trololo im driver NLO"},
            {id: 3, text:"wof wof?"},
            {id: 4, text:"Meow"},
            {id: 5, text:"Hi guys, how are your tails?"},
        ],
        dialogsData: [
            {id: 1, name: "Dima", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s"},
            {id: 2, name: "Roma", isFriend: 1, ava: "https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg"},
            {id: 3, name: "Andrew", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s"},
            {id: 4, name: "Lyci", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s"},
            {id: 5, name: "Anton", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s"},
            {id: 6, name: "Lymen", isFriend: 1, ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkyhoMA_A3DhFhKFjbeAvBXqJHZ41elwKpbq5eOZerw&s"},
            {id: 7, name: "Yukki", isFriend: 1, ava: "https://royal-groom.ru/sites/default/files/breed/shelti.jpg"},
            {id: 8, name: "Tolya", ava: "https://q2m9b9t2.stackpathcdn.com/wp-content/uploads/2018/08/BassamAllam4.jpg"},
        ],
    }

    state.sideBar = {
      friends: state.messagesPage.dialogsData.filter((user) =>  {return user.isFriend}), 
      // проверка, если в массиве dialogs data у объекта есть атрибут isFriend, добавляем сюда.
    }


console.log(state.sideBar.friends)
