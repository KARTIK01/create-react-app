// import {ERROR, SUCCESS, CLEAR} from "../actions/constants/actionTypes";
//
// const initialState = {
//   message            : null,
//   showSnackbarError  : false,
//   showSnackbarSuccess: false
// };

function reducer(state = initialState, action) {
  switch (action.type) {
    // case ERROR:
    //   return {
    //     ...state,
    //     showSnackbarError  : true,
    //     message            : action.payload.message || "some error occurred",
    //     showSnackbarSuccess: false
    //   };
    // case SUCCESS:
    //   return {
    //     ...state,
    //     showSnackbarError  : false,
    //     message            : action.payload.message || "some success occurred",
    //     showSnackbarSuccess: true
    //   };
    // case CLEAR:
    //   return {
    //     ...state,
    //     showSnackbarError  : false,
    //     message            : null,
    //     showSnackbarSuccess: false
    //   };
    default:
      return state;
  }
}

export default reducer;
