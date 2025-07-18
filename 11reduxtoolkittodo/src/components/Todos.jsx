import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/Todo/todoSlice"; // Correct path

function Todo() {
  // CORRECTED: Access todos via state.todo.todos
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => {
          // CORRECTED: Add `return` statement OR remove curly braces
          return (
            <li
              className="mt-4 flex justify-between items-cnter bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-700 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                {/* It's good practice to ensure SVG paths are valid,
                    though 'd="#"' might just be a placeholder. */}
                <svg
                  xmlns="http://www.w3.org/2000/svg" // Corrected xmlns to http
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {/* Ensure this path 'd' attribute is a valid SVG path for the icon you want */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;