import { createSlice } from '@reduxjs/toolkit'

interface HomePageState {
  value: number
}

const initialState: HomePageState = {
  value: 0,
}

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export default homePageSlice.reducer
