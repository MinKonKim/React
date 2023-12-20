import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let todoStore = (set) => ({
  todos: [],
  addTodo: (todoText) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          text: todoText,
          id: getId(),
          isCompleted: false,
        },
      ],
    })),

  deleteTodo: (todoId) =>
    set((state) => ({
      //아이디가 다른것만 남겨둬라 (filter사용)
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),

  completeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: true,
          };
        }
        return todo;
      }),
    })),
});

todoStore = persist(devtools(todoStore), {
  name: "todo",
  getStorage: () => sessionStorage,
});

export const useTodoStore = create(todoStore);

let id = 0;
function getId() {
  return id++;
}
