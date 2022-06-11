const BASE_URL_1 = "https://jsonplaceholder.typicode.com/users";
const BASE_URL_2 = "https://jsonplaceholder.typicode.com/todos";

const dataUsers = fetch(BASE_URL_1).then((response) => response.json());

const dataTodos = fetch(BASE_URL_2).then((response) => response.json());

//solution number 1

/* const agrigateUsersTodos = async () => {
  try {
    const [usersList, todosList] = await Promise.all([dataUsers, dataTodos]);

    return usersList.map((user) => {
      return {
        ...user,
        todos: todosList.filter(({ userId }) => userId === user.id),
      };
    });
  } catch (error) {
    console.log(error.message);
  }
};

agrigateUsersTodos().then((data) => console.log(data)); */

//solution number 2

const agrigateUsersTodos = async () => {
  try {
    const [usersList, todosList] = await Promise.all([dataUsers, dataTodos]);

    const todosMap = todosList.reduce((acc, todos) => {
      if (acc[todos.userId]) {
        acc[todos.userId].push(todos);
      } else {
        acc[todos.userId] = [];
      }

      return acc;
    }, {});

    return usersList.map((item) => {
      return {
        ...item,
        todos: todosMap[item.id],
      };
    });
  } catch (error) {
    console.log(error.message);
  }
};

agrigateUsersTodos().then((data) => console.log(data));
