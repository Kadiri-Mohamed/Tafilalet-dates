import React from "react"
import { useSelector } from "react-redux";

const UsersTable = (props) => {
    const users = useSelector(state => state.users)
    return (
        <div>
            <table className="w-full text-center rounded-lg ">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
                            </td>
                            <td>
                                <button className="bg-green-500 text-white px-2 py-1 rounded-md">Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default UsersTable;
