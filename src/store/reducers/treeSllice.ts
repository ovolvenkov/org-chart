import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TreeState {
  isTouchedTree: boolean;
}

const initialState: TreeState = {
  isTouchedTree: false
}

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setIsTouchedTree(state, action: PayloadAction<boolean>) {
      state.isTouchedTree = action.payload;
    }

  }
})

export default treeSlice.reducer;