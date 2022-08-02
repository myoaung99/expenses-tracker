import axios from "axios";

const BACKEND_URL =
  "https://react-native-expense-t-default-rtdb.firebaseio.com";

export const storeExpense = async (expense) => {
  const response = await axios.post(BACKEND_URL + "/expenses.json", expense);
  console.log(response.data.name);
  return response.data.name;
};

export const fetchExpenses = async () => {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];
  for (const key in response.data) {
    const expense = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date).toString(),
      name: response.data[key].name,
    };

    expenses.push(expense);
  }

  return expenses;
};
