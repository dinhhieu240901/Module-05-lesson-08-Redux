import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../redux/Action";

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [showUsers, setShowUsers] = useState(false);

  const handleGetUsers = () => {
    dispatch(getUsers());
    setShowUsers(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h3>Get users</h3>
      <button onClick={handleGetUsers}>Get Users</button>
      {showUsers && (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default User;
