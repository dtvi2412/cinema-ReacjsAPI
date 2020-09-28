import { FETCH_CREDENTIALS, LOG_OUT } from "../Action/type";

let initialState = {
  credential: null,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS:
      state.credential = action.payload;
      return { ...state };
    case LOG_OUT:
      state.credential = action.payload;
      return { ...state };
    case "SIGN_UP":
      state.credential = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default UserReducer;
