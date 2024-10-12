"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPermanentlyDeleted = exports.removeUser = exports.editUser = exports.findUsers = exports.findUserById = exports.addUser = void 0;
const prisma_1 = require("../lib/prisma");
const addUser = (name, email, gender) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.create({
        data: { name, email, gender },
    });
    return user;
});
exports.addUser = addUser;
const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.findFirst({
        where: { id },
    });
    return user;
});
exports.findUserById = findUserById;
const findUsers = (isDeleted) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.prisma.user.findMany({
        where: { isDeleted },
    });
    return users;
});
exports.findUsers = findUsers;
const editUser = (id, name, email, gender) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.update({
        where: { id },
        data: { name, email, gender },
    });
    return user;
});
exports.editUser = editUser;
const removeUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.update({
        where: { id },
        data: { isDeleted: true },
    });
    return user;
});
exports.removeUser = removeUser;
const isPermanentlyDeleted = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.delete({
        where: { id },
    });
    return user;
});
exports.isPermanentlyDeleted = isPermanentlyDeleted;
