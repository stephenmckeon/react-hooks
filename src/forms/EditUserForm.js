import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    props.updateUser(user.id, user)
  }

  const handleClick = () => {
    props.setEditing(false)
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label>Spirit Animal</label>
      <input
        type="text"
        name="spiritAnimal"
        value={user.spiritAnimal}
        onChange={handleInputChange}
      />
      <label>Favorite Color</label>
      <input
        type="text"
        name="color"
        value={user.color}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={handleClick}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm