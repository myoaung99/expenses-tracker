import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

export const counterSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.unshift(action.payload);
    },
    updateExpense: (state, action) => {
      const { id: itemId, data: itemData } = action.payload;
      const updatingItemIndex = state.expenses.findIndex(
        (expense) => expense.id === itemId
      );
      state.expenses[updatingItemIndex] = { id: itemId, ...itemData };
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
    setInitialExpenses: (state, action) => {
      state.expenses = action.payload.expenses.reverse();
    },
  },
});

export const { addExpense, updateExpense, deleteExpense, setInitialExpenses } =
  counterSlice.actions;

export default counterSlice.reducer;
