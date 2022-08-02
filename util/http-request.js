import axios from "axios";

const BACKEND_URL =
  "https://react-native-expense-t-default-rtdb.firebaseio.com";

export const storeExpenseServer = async (expense) => {
  const response = await axios.post(BACKEND_URL + "/expenses.json", expense);
  return response.data.name;
};

export const fetchExpensesServer = async () => {
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

export const updateExpenseServer = (id, expense) => {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expense);
};

export const deleteExpenseServer = async (id) => {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};
