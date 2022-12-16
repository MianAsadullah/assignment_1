// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit"

export const sectorSlice = createSlice({
  name: "sectorData",
  initialState: {
    records: [],
    item: {}
  },
  reducers: {
    handleTableData: (state, action) => {
      state.records = action.payload
    },
    handleSingleRecord: (state, action) => {
      state.item = action.payload
    }
  }
})

export const { handleTableData, handleSingleRecord } = sectorSlice.actions

export default sectorSlice.reducer
