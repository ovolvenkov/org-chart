import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./actionCreators";
import {CompanyMember} from "../../types/types";
import {UserState} from "../../types/types"

const initialState: UserState = {
  users: {
    data: []
  },
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<CompanyMember[]>) => {
      state.isLoading = false;
      state.error = '';
      state.users.data = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default userSlice.reducer;