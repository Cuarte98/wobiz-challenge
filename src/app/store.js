import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../views/loginSlice";
export default configureStore({
    reducer: {
        login: loginReducer,
    },
});
