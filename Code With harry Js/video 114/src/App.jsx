import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showfinished, setshowFinished] = useState(false);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = (params) => {
    localStorage.getItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = (e) => {
    setshowFinished(!showfinished);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
    // console.log(todo);
  };
  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);

    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(`first id is:  ${id}`);
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    // console.log(index);

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();

    // console.log(newTodos, todo);
  };

  return (
    <>
      <Navbar />
      <div className="container bg-violet-100 mx-auto my-5 p-5 rounded-xl min-h-[80vh] w-1/2  ">
        <h1 className="text-2xl font-bold text-center ">
          iTask - Manage your todos at one place
        </h1>
        <div className="addTodo py-5">
          <h2 className="font-bold text-lg py-1">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            className="bg-white rounded-[5px] w-[83%] px-5 py-1.5 "
            type="text"
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="bg-purple-500 hover:bg-purple-600 py-1.5 rounded-[5px] px-5 text-white ml-4 text-sm  disabled:bg-violet-800"
          >
            Save
          </button>
        </div>
        <input
          className="mr-2"
          onChange={toggleFinished}
          type="checkbox"
          checked={showfinished}
        />
        Show Finished
        <div className="w-[90%] mx-auto my-3 bg-gray-400 h-[1px]"></div>
        <h1 className="font-bold text-xl">Your Todos</h1>
        <div className="todos">
          {todos.length === 0 && <div className="m-4">No Todos to display</div>}
          {todos.map((item, index) => {
            return (
              (showfinished || !item.isCompleted) && (
                <div
                  key={todo.id || index}
                  className="todo flex w-full justify-between my-3"
                >
                  <div className="flex gap-3 items-center">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      id=""
                    />

                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-purple-500 hover:bg-purple-600 py-1 rounded-[5px] p-3 text-white mx-1 text-sm"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-purple-500 hover:bg-purple-600 py-1 rounded-[5px] p-3 text-white mx-1 text-sm"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
