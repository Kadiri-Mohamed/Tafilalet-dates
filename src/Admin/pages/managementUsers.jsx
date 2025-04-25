import React from "react"
import UsersTable from "../components/UsersTable"
const managementUsers = (props) => {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Users</h1>
      <p>Welcome to the Users Management section!</p>
      <UsersTable></UsersTable>
    </div>
  )
};

export default managementUsers;
