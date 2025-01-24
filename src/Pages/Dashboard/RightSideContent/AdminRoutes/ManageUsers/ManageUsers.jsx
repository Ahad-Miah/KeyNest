import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { AiOutlineUser, AiOutlineDelete, AiOutlineExclamationCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure/useAxiosSecure';

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`users`)
      return data;
    },
  })

  const handleRole = (id, role, email) => {
    axiosSecure.patch(`updateRole/${id}?role=${role}&email=${email}`)
      .then(result => {
        if (result.data.acknowledged) {
          toast.success(`Updated user role to ${role}`);
        }
        refetch();
      })
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`deleteUser/${id}`)
          .then(result => {
            if (result.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success"
              });
              refetch();
            }
          });
      }

    });
  }

  // const users = [
  //     {
  //       id: 1,
  //       name: 'John Doe',
  //       email: 'john.doe@example.com',
  //       role: 'user',
  //     },
  //     {
  //       id: 2,
  //       name: 'Jane Smith',
  //       email: 'jane.smith@example.com',
  //       role: 'agent',
  //     },
  //     // Add more sample users as needed
  //   ];
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
            {users?.map((user, index) => (
              <tr
                key={index}
                className={`$ {
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <td className="border px-4 py-2 font-medium">{user?.name}</td>
                <td className="border px-4 py-2">{user?.email}</td>
                <td className="border px-4 py-2 flex items-center justify-center space-x-2">

                  {
                    user.role === 'fraud' ? <span className='badge badge-secondary p-3 font-semibold bg-green-600 text-center'>Fraud</span>
                      : <>
                        <button
                          onClick={() => handleRole(user?._id, "admin")}
                          className="flex items-center px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors duration-300"
                        >
                          <AiOutlineUser className="mr-2" /> Make Admin
                        </button>
                        <button
                          disabled={user?.role === "admin"}
                          onClick={() => handleRole(user?._id, "agent")}
                          className="flex items-center px-3 py-2 bg-purple-500 text-white text-sm font-medium rounded-md hover:bg-purple-600 transition-colors duration-300"
                        >
                          <AiOutlineUser className="mr-2" />{user.role === "agent" ? "Agent" : "Make Agent"}
                        </button>
                        {user.role === 'agent' && (
                          <button
                            onClick={() => handleRole(user?._id, "fraud", user?.email)}
                            className="flex items-center px-3 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 transition-colors duration-300"
                          >
                            <AiOutlineExclamationCircle className="mr-2" /> Mark as Fraud
                          </button>
                        )}
                      </>
                  }

                  <button
                    onClick={() => handleDelete(user?._id)}
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
