import { Gender } from "@prisma/client";
import {
  addUser,
  editUser,
  findUserById,
  findUsers,
  isPermanentlyDeleted,
  removeUser,
} from "./user.repository";

export const createUser = async (
  name: string,
  email: string,
  gender: Gender
) => {
  // await fullFields(name, email, gender);
  await cekGender(gender);
  const user = await addUser(name, email, gender);
  return user;
};

export const getUser = async (id: number) => {
  await cekIsNaN(id);
  const user = await findUserById(id);
  if (!user) {
    throw Error("user not found!");
  }
  return user;
};

export const getAlluser = async (isDeleted: boolean) => {
  const users = await findUsers(isDeleted);
  return users;
};

export const updateUser = async (
  id: number,
  name: string,
  email: string,
  gender: Gender
) => {
  await cekIsNaN(id);
  // await fullFields(name, email, gender);
  await cekGender(gender);

  const user = await editUser(id, name, email, gender);
  return user;
};

export const deleteUser = async (id: number) => {
  await cekIsNaN(id);
  const user = await removeUser(id);
  return user;
};

export const permanentlyDeleted = async (id: number) => {
  await cekIsNaN(id);
  const user = await isPermanentlyDeleted(id);
  return user;
};

//validasi
export const cekIsNaN = async (id: number) => {
  if (isNaN(id)) {
    throw Error("id not a number");
  }
};

export const cekGender = async (gender: Gender) => {
  if (!(gender in Gender)) {
    throw new Error(`Invalid gender: ${gender}? choose (Pria or Wanita)`);
  }
};
