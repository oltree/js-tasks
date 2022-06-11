const BASE_URL_1 = "https://jsonplaceholder.typicode.com/users";
const BASE_URL_2 = "https://jsonplaceholder.typicode.com/todos";

const dataUsers = async () => {
  const result = await fetch(BASE_URL_1).then((response) => response.json());
  return result;
};

const dataTodos = async () => {
  const result = await fetch(BASE_URL_2).then((response) => response.json());
  return result;
};

const agrigateUsersTodos = async () => {
  try {
    const usersList = await dataUsers();

    const todosList = await dataTodos();

    return usersList.map((user) => {
      return {
        ...user,
        todos: todosList.filter(({ userId }) => {
          return userId === user.id;
        }),
      };
    });
  } catch (error) {
    console.log(error.message);
  }
};

agrigateUsersTodos().then((data) => console.log(data));
