import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../redux/hooks";

export interface UserState {
  user: {
    username: string;
    tag: string;
    avatar: string;
    about: string;
    banner: string;
    userID: string;
  };
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: UserState = {
  user: {
    username: "",
    tag: "",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/banter-69832.appspot.com/o/Account.png?alt=media&token=32d8543b-cc91-4006-b014-ab93d128441a",
    about: "",
    banner: "",
    userID: "",
  },
  loading: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const useUserState = () => useAppSelector((state) => state.user);

export default userSlice.reducer;
