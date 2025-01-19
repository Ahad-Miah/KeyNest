import React from 'react';
import { AiOutlineUser, AiOutlineDelete, AiOutlineExclamationCircle } from 'react-icons/ai';

const ManageUsers = () => {

    const users = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          role: 'user',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          role: 'agent',
        },
        // Add more sample users as needed
      ];
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Manage Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#a32323] text-white text-left">
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">User Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={`$ {
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <td className="border px-4 py-2 font-medium">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2 flex space-x-2">
                  <button
                    onClick={() => onMakeAdmin(user.id)}
                    className="flex items-center px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors duration-300"
                  >
                    <AiOutlineUser className="mr-2" /> Make Admin
                  </button>
                  <button
                    onClick={() => onMakeAgent(user.id)}
                    className="flex items-center px-3 py-2 bg-purple-500 text-white text-sm font-medium rounded-md hover:bg-purple-600 transition-colors duration-300"
                  >
                    <AiOutlineUser className="mr-2" /> Make Agent
                  </button>
                  {user.role === 'agent' && (
                    <button
                      onClick={() => onMarkFraud(user.id)}
                      className="flex items-center px-3 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 transition-colors duration-300"
                    >
                      <AiOutlineExclamationCircle className="mr-2" /> Mark as Fraud
                    </button>
                  )}
                  <button
                    onClick={() => onDeleteUser(user.id)}
                    className="flex items-center px-3 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors duration-300"
                  >
                    <AiOutlineDelete className="mr-2" /> Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

// Sample usage

// const handleMakeAdmin = (id) => alert(`Made user with ID: ${id} an admin`);
// const handleMakeAgent = (id) => alert(`Made user with ID: ${id} an agent`);
// const handleMarkFraud = (id) => alert(`Marked user with ID: ${id} as fraud`);
// const handleDeleteUser = (id) => alert(`Deleted user with ID: ${id}`);
// <ManageUsers
//   users={sampleUsers}
//   onMakeAdmin={handleMakeAdmin}
//   onMakeAgent={handleMakeAgent}
//   onMarkFraud={handleMarkFraud}
//   onDeleteUser={handleDeleteUser}
// />
