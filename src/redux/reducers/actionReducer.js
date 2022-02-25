import UUidv4 from "../../components/Util";

const INITIAL_STATE = {
  addedPosts: [
    {
      userName: "Patricia Lebsack",
      descripion:
        "consectetur adipisicing elit. Sint officiis facere ipsum cumque temporibus",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9U_yJRVYMZX4I-rliowO8_qW4e-Ms_VrnbHCiFzVKVVRTmtHGAZKRN7dijPNHVfBZFE&usqp=CAU",
      story:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwWp7Dl1HPOIAir0dMBgYj68gC-9Z_qPIrQ&usqp=CAU",
      postId: UUidv4(),
    },
    {
      userName: "Kurtis Weissnat",
      descripion:
        "consectetur adipisicing elit. Sint officiis facere ipsum cumque temporibus",
      imag: "https://randomuser.me/api/portraits/men/27.jpg",
      story:
        "https://media.istockphoto.com/photos/nature-background-picture-id654475604?k=20&m=654475604&s=170667a&w=0&h=YIaJBjMPbwdeTEfyerAbxLB4jcDox77PAjPbTDMMHK8=",
      postId: UUidv4(),
    },
    {
      userName: "Kurtis Weissnat",
      descripion:
        "consectetur adipisicing elit. Sint officiis facere ipsum cumque temporibus",
      imag: "https://randomuser.me/api/portraits/men/27.jpg",
      story:
        "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1588383337000/photosp/b8548efe-628f-4271-82c7-194ec238b989/stock-photo-nature-followers-beautiful-nature-beautiful-followers-editing-background-b8548efe-628f-4271-82c7-194ec238b989.jpg",
      postId: UUidv4(),
    },
    {
      userName: "Kurtis Weissnat",
      descripion:
        "consectetur adipisicing elit. Sint officiis facere ipsum cumque temporibus",
      imag: "https://cdn6.aptoide.com/imgs/6/7/e/67e784dd4799653811f31a64aa352ddd_screen.png",
      story:
        "https://r2.community.samsung.com/t5/image/serverpage/image-id/2536430i87AEABB7C31AF88E/image-size/large?v=v2&px=999",
      postId: UUidv4(),
    },
    {
      userName: "Kurtis Weissnat",
      descripion:
        "consectetur adipisicing elit. Sint officiis facere ipsum cumque temporibus",
      imag: "https://randomuser.me/api/portraits/men/27.jpg",
      story:
        "https://i.pinimg.com/originals/57/fb/67/57fb67a68b86eda979a84db15abe3c2a.jpg",
      postId: UUidv4(),
    },
  ],
  addedComment: [


    
  ],
  addedBiography: [
    {
      text: "biography",
    },
  ],
};

const postReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATEPOST":
      return {
        ...state,
        addedPosts: [action.payload, ...state.addedPosts],
      };
    case "CREATECOMMENT":
      return {
        ...state,
        addedComment: [...state.addedComment, action.payload],
      };
    case "CREATEBIOGRAPHY":
      return {
        ...state,
        addedBiography: [...state.addedBiography, action.payload],
      };

    default:
      return state;
  }
};
export default postReduser;
