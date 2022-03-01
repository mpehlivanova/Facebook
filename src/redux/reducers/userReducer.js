const INITIAL_STATE = {
  logged: false,
  currLogged: [],
  registered: [
    {
      email: "krisi@mail.com",
      password: "123",
      firstName: "Кристина Георгиева",
      avatar:
        "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
      coverPhoto:
        "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
      friends: [],
      requests: [],
    },
    {
      email: "maria@mail.com",
      password: "123",
      firstName: "Мария Игнатова",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwARSkScsrzy1ftUqp2Nord9223ss-3ppFFmzhQWMbW6YQ5httI5_WeKoRVm5j4Bf9fQ&usqp=CAU",
      coverPhoto:
        "https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      friends: [],
      requests: [],
    },
    {
      email: "rosi@mail.com",
      password: "123",
      firstName: "Росица Кирилова",
      avatar:
        "https://i.pinimg.com/564x/e8/b2/71/e8b271169214323595f5155a649884d2--web-development-generators.jpg",
      coverPhoto:
        "https://i.pinimg.com/originals/60/d7/1f/60d71f1b21e01427d4a0aedbebea0b94.jpg",
      friends: [],
      requests: [],
    },
  ],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currLogged: [...state.currLogged, action.payload],
        logged: true,
      };

    case "LOGOUT":
      return {
        ...state,
        currLogged: [],
        logged: false,
      };

    case "REGISTER":
      return {
        ...state,
        registered: [...state.registered, action.payload],
      };
    
    case "CHANGEAVATAR":
      let logged = [...state.currLogged];
      logged[0].avatar = action.payload;
     
      return {
        ...state,
        currLogged: logged
      }

    default:
      return state;

      case "REQUEST":
        let newState = [...state.registered]
        let a = action.payload
        let thisUser = [...state.currLogged]
       
        newState.map(e => {
          if(e.email === a){
            e.requests.push(thisUser[0])
           
          }
        })
        
        return{
          ...state,
          registered: newState
        }
        

        case "ADD":
        let userOnlineNow = [...state.currLogged]
        let emailOfPeoplefromReguest = action.payload
        let setData = [...state.registered]
        let filtersPotrebitel = setData.filter( e => e.email === emailOfPeoplefromReguest)
        

        for(let i = 0; i < setData.length;i++){
          if(setData[i].email === userOnlineNow[0].email){
            let newListofRequest = setData[i].requests.filter(e => e.email !== emailOfPeoplefromReguest)
            setData[i].requests = newListofRequest
          }
        }

        setData.map(e =>{
          if(e.email === userOnlineNow[0].email){
            e.friends.push(filtersPotrebitel[0])
          }
        })

        setData.map(e => {
          if(e.email === emailOfPeoplefromReguest){
            e.friends.push(userOnlineNow[0])
          }
        })



        return{
          ...state,
          currLogged: userOnlineNow,
          registered: setData
          
          
        }

        case "DELЕТЕ":
        let currentUser = [...state.currLogged] //връща обект - потребителя,които се е логнал
        let emailFromRequest = action.payload //мейла на потребителя,които иска заявка
        let regUsers = [...state.registered] // всички регистрирани потребители

        for(let i =0; i < regUsers.length;i++){
          if(regUsers[i].email === currentUser[0].email){
             let newRequest = regUsers[i].requests.filter(e => e.email !== emailFromRequest)
             regUsers[i].requests = newRequest
          }
        }
        
        return{
          ...state,
          registered: regUsers
        }

  }
};
export default userReducer;
