import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    {
      id: "e1",
      name: "Book",
      amount: 333.3,
      date: new Date(2022, 7, 2).getTime(),
    },
    {
      id: "e2",
      name: "Another Book",
      amount: 33.3,
      date: new Date(2022, 6, 27).getTime(),
    },
    {
      id: "e3",
      name: "Yet Another Book",
      amount: 33.3,
      date: new Date(2022, 7, 1).getTime(),
    },
    {
      id: "e4",
      name: "You guessed it",
      amount: 33.3,
      date: new Date(2022, 6, 25).getTime(),
    },
  ],
};

export const counterSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random();
      state.expenses = [{ id: id, ...action.payload }, ...state.expenses];
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
  },
});

export const { addExpense, updateExpense, deleteExpense } =
  counterSlice.actions;

export default counterSlice.reducer;
