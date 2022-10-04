import "./App.css";
import React, { useState } from "react";
import Modal from "./UI/Modal";

function App() {
  /* GET DATE STUFF */
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let dayName = today.toLocaleString("en-us", { weekday: "short" });
  let currentDate = dd + "/" + mm;

  /* MANAGE TODO & MODAL */
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  function addTodo(todo) {
    const newTodo = {
      id: Math.random(),
      title: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  }

  function deleteTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  function handleSubmit() {
    if (!input) {
      setModalOpen(false);
    } else {
      addTodo(input);
      setModalOpen(false);
    }
  }

  return (
    <div className="app">
      {/* MODAL */}
      {modalOpen && (
        <div>
          <div
            className="backdrop"
            onClick={() => {
              setModalOpen(false);
            }}
          />
          <Modal>
            <div className="modalDiv">
              <input
                className="newInput"
                type="text"
                onChange={(event) => {
                  setInput(event.target.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSubmit();
                  }
                }}
                value={input}
                placeholder="What's the new todo?"
              />
              <div className="actions">
                <button className="addButton" onClick={handleSubmit}>
                  Add
                </button>
              </div>
            </div>
          </Modal>
        </div>
      )}

      {/* HEADER */}

      <div className="header">
        <div className="currentDate">
          <h1 className="dayTitle">{currentDate}</h1>
        </div>
        <div className="dayName">
          <h1 className="dayTitle">{dayName}</h1>
        </div>
      </div>

      {/* TODO LIST */}

      <div className="content">
        {list.length > 0 ? (
          <ul>
            {list.map((todo) => {
              return (
                <div>
                  <li key={todo.id}>
                    {todo.title}
                    <div className="deleteBDiv">
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="deleteButton"
                      >
                        &#10060;
                      </button>
                    </div>
                  </li>
                  <hr />
                </div>
              );
            })}
          </ul>
        ) : (
          <p className="noTodo">Nothing to do!</p>
        )}
      </div>

      {/* FOOTER */}

      <div className="openModalDiv">
        <button
          onClick={() => {
            setModalOpen(true);
          }}
          className="openButton"
        >
          &#43;
        </button>
      </div>
    </div>
  );
}

export default App;
