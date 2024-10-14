import { Gender } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const addUser = async (name: string, email: string, gender: Gender) => {
  const user = await prisma.user.create({
    data: { name, email, gender },
  });
  return user;
};

export const findUserById = async (id: number) => {
  const user = await prisma.user.findFirst({
    where: { id },
  });
  return user;
};

export const findUsers = async (isDeleted: boolean) => {
  const users = await prisma.user.findMany({
    where: { isDeleted },
  });
  return users;
};

export const editUser = async (
  id: number,
  name: string,
  email: string,
  gender: Gender
) => {
  const user = await prisma.user.update({
    where: { id },
    data: { name, email, gender },
  });
  return user;
};

export const removeUser = async (id: number) => {
  const user = await prisma.user.update({
    where: { id },
    data: { isDeleted: true },
  });
  return user;
};

export const isPermanentlyDeleted = async (id: number) => {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
};
