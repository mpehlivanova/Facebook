const INITIAL_STATE = {
  logged: false,
  currLogged: [],
  registered: [
    {
      email: "kristina@mail.com",
      password: "123",
      firstName: "Кристина Георгиева",
      avatar:
        "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
      coverPhoto:
        "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
        friends:[],
        requests:[], 
    },
    {
      email: "kristina2@mail.com",
        password: "123",
        firstName: "Мария ",
        lastName: "",
        avatar:
          "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
        coverPhoto:
          "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
        friends:[],
        requests:[],
      
      },
      {
        email: "kristina3@mail.com",
          password: "123",
          firstName: "Росица",
          lastName: "",
          avatar:
          "https://i.pinimg.com/564x/e8/b2/71/e8b271169214323595f5155a649884d2--web-development-generators.jpg",
          coverPhoto:
            "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
          friends:[],
          requests:[],
            
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
      let user = [...state.currLogged];
      user[0].avatar = action.payload;
      return {
        ...state,
        currLogged: user
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
          currLogged: regUsers
        }

  }
};
export default userReducer;
