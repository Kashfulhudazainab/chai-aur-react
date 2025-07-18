import { createContext, useContext } from "react";

export const Todocontext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo message",
      completed: false,
    },
  ],
  addtodo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  deletetodo:(id)=>{},
  togglecomplete:(id)=>{}
});

export const useTodo = () => {
  return useContext(Todocontext);
};

export const Todoprovider = Todocontext.Provider;
