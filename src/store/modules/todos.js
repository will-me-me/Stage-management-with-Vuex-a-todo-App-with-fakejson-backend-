import axios from "axios";
import Vue from "vue";

Vue.use(axios);

const state = {
  todos: [],
};

const getters = {
  alltodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
    console.log(response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("newTodo", response.data);
  },
  // async deleteTodo({ commit }, id) {
  //   await axios.delete(`https://jsonplaceholder.typicode.com/todos${id}`);

  //   commit("removeTodo", id);
  // },
  deleteTodo: (contex, todo) => {
    contex.commit("removeTodo", todo);
  },
  async filterTodos({ commit }, e) {
    //get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    //console.log(limit);
    const response = await axios.get(
      ` https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    //console.log(response);
    commit("setTodos", response.data);
  },
  async UpdateTodo({ commit }, updTodo) {
    const response = await axios.put(
      ` https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );
    commit("UpdateTodo", response.data);
  },
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, todo) => {
    state.todos.splice(todo, 1);
  },
  UpdateTodo: (state, updTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  },
  //   removeTodo: (state, id) =>
  //     (state.todos = state.todos.filter((todo) => todo.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
