import React, { useEffect, useState } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import EditTodo from "./Edit";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/trap");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
      <MDBContainer>
          <br/><br/>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Trap ID</th>
            <th>Set</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.trap_id}>
              <td>{todo.trap_id}</td>
              <td><EditTodo todo={todo} /></td> 
              <td>{todo.trap_status}</td>             
            </tr>
          ))}
        </tbody>
      </table>
      </MDBContainer>
  );
};

export default ListTodos;