import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAllUsers} from "../../api/usersApi";

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getAllUsers();
      return response?.data?.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  });