import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Spirit Animal</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id} style={{color: user.color}}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.spiritAnimal}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.removeUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable