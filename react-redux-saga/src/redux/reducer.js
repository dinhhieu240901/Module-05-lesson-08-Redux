import { FETCH_USER, FETCH_USER_SUCCESS, LOGIN_SUCCESS } from "./action";

//// khởi tạo giá trị mặc định cho state gốc.
const initialValue = {
  users: [],
  userlogined: {},
};

// Khởi tạo reducer
const rootReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, userlogined: action.payload };
    // Lấy thông tin người dùng hiện tại  
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
