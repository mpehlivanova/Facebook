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
    // case "CHANGEAVATAR":
    //   return {
    //     ...state,
    //     currLogged: [...state.avatar, action.payload],
    //   };

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
        let meOnline = [...state.currLogged]
        let emailOfPeoplefromReguest = action.payload
        let setStates = [...state.registered]
        let filtersPotrebitel = setStates.filter( e => e.email === emailOfPeoplefromReguest)
        

        setStates.map(e =>{
          if(e.email === meOnline[0].email){
            e.friends.push(filtersPotrebitel[0])
          }
        })

        setStates.map(e => {
          if(e.email === emailOfPeoplefromReguest){
            e.friends.push(meOnline[0])
          }
        })

        return{
          ...state,
          registered: setStates,
          
        }
       
  }
};
export default userReducer;
