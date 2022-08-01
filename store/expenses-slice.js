import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    {
      id: "e1",
      name: "A pair of shoes",
      amount: 59.99,
      date: new Date("2022-07-25").getTime(),
    },
    {
      id: "e2",
      name: "A pair of trousers",
      amount: 89.29,
      date: new Date("2022-07-25").getTime(),
    },
    {
      id: "e3",
      name: "Some bananas",
      amount: 5.99,
      date: new Date("2022-07-26").getTime(),
    },
    {
      id: "e4",
      name: "A book",
      amount: 14.99,
      date: new Date("2022-06-28").getTime(),
    },
    {
      id: "e5",
      name: "Another book",
      amount: 18.59,
      date: new Date("2022-06-20").getTime(),
    },
    {
      id: "e6",
      name: "A pair of trousers",
      amount: 89.29,
      date: new Date("2022-06-21").getTime(),
    },
    {
      id: "e7",
      name: "Some bananas",
      amount: 5.99,
      date: new Date("2021-12-01").getTime(),
    },
    {
      id: "e8",
      name: "A book",
      amount: 14.99,
      date: new Date("2022-02-19").getTime(),
    },
    {
      id: "e9",
      name: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18").getTime(),
    },
  ],
};

export const counterSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random();
      // state.expenses = [{ id: id, ...action.payload }, ...state.expenses];
      state.expenses.unshift({ id: id, ...action.payload });
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
