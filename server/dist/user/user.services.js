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
exports.cekGender = exports.cekIsNaN = exports.permanentlyDeleted = exports.deleteUser = exports.updateUser = exports.getAlluser = exports.getUser = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const user_repository_1 = require("./user.repository");
const createUser = (name, email, gender) => __awaiter(void 0, void 0, void 0, function* () {
    // await fullFields(name, email, gender);
    yield (0, exports.cekGender)(gender);
    const user = yield (0, user_repository_1.addUser)(name, email, gender);
    return user;
});
exports.createUser = createUser;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.cekIsNaN)(id);
    const user = yield (0, user_repository_1.findUserById)(id);
    if (!user) {
        throw Error("user not found!");
    }
    return user;
});
exports.getUser = getUser;
const getAlluser = (isDeleted) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_repository_1.findUsers)(isDeleted);
    return users;
});
exports.getAlluser = getAlluser;
const updateUser = (id, name, email, gender) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.cekIsNaN)(id);
    // await fullFields(name, email, gender);
    yield (0, exports.cekGender)(gender);
    const user = yield (0, user_repository_1.editUser)(id, name, email, gender);
    return user;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.cekIsNaN)(id);
    const user = yield (0, user_repository_1.removeUser)(id);
    return user;
});
exports.deleteUser = deleteUser;
const permanentlyDeleted = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.cekIsNaN)(id);
    const user = yield (0, user_repository_1.isPermanentlyDeleted)(id);
    return user;
});
exports.permanentlyDeleted = permanentlyDeleted;
//validasi
const cekIsNaN = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (isNaN(id)) {
        throw Error("id not a number");
    }
});
exports.cekIsNaN = cekIsNaN;
const cekGender = (gender) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(gender in client_1.Gender)) {
        throw new Error(`Invalid gender: ${gender}? choose (Pria or Wanita)`);
    }
});
exports.cekGender = cekGender;
