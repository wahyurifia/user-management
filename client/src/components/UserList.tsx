import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "./modal";

enum Gender {
  Pria,
  Wanita,
}

interface User {
  id: number;
  name: string;
  email: string;
  gender: Gender;
}

const UserList: React.FC = () => {
  const [users, setUser] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get(
      "https://server-api-lilac.vercel.app/users"
    );
    console.log(response.data.users);

    setUser(response.data.users);
  };

  const deleteUser = async (id: number) => {
    try {
      await axios.patch(`https://server-api-lilac.vercel.app/users/${id}`);
      getUsers();
      setIsModalOpen(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex mt-20 justify-center ">
      <div className="flex-col w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="my-5">
          <Link
            to={"add"}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add User
          </Link>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user?.id}
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${
                  index === users.length - 1 &&
                  "border-none dark:border-gray-700"
                }`}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user?.name!}
                </th>
                <td className="px-6 py-4">{user?.email!}</td>
                <td className="px-6 py-4">{user?.gender}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/edit/${user?.id}`}
                    className="pr-6 font-medium  dark:text-blue-500 hover:underline"
                  >
                    Update
                  </Link>
                  <button
                    className="font-medium  dark:text-red-500 hover:underline"
                    onClick={() => handleUserClick(user)}
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              user={selectedUser}
              onConfirm={deleteUser}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
