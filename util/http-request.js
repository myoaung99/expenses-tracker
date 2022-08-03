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

export const updateExpenseServer = async (id, expense) => {
  console.log("updateExpenseServer", id);
  const response = await axios.put(
    BACKEND_URL + `/expenses/${id}.json`,
    expense
  );
  return response;
  // return await fetch(BACKEND_URL + `/expenses/${id}.json`, {
  //   method: "PUT",
  //   body: JSON.stringify(expense),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // return await axios.put(BACKEND_URL + `/expenses/${id}`, {
  //   name: "Ysvias324dsdf",
  //   amount: 131235,
  //   date: "2022-08-01T00:00:00.000Z",
  // });
};

export const deleteExpenseServer = async (id) => {
  return await axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};
