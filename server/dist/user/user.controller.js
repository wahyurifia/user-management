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
exports.router = void 0;
const express_1 = require("express");
const user_services_1 = require("./user.services");
exports.router = (0, express_1.Router)();
exports.router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, gender } = req.body;
    try {
        const user = yield (0, user_services_1.createUser)(name, email, gender);
        res.send({
            message: "Success create new user!",
            user,
        });
    }
    catch (error) {
        res.send(error.message);
    }
}));
exports.router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isDeleted = false;
        const users = yield (0, user_services_1.getAlluser)(isDeleted);
        res.send({
            message: "Success get all users!",
            users,
        });
    }
    catch (error) {
        res.send(error.message);
    }
}));
exports.router.get("/del", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isDeleted = true;
        const users = yield (0, user_services_1.getAlluser)(isDeleted);
        res.send({
            message: "Success get all users deleted!",
            users,
        });
    }
    catch (error) {
        res.send(error.message);
    }
}));
exports.router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    try {
        const user = yield (0, user_services_1.getUser)(userId);
        res.send({
            message: "Success get one user!",
            user,
        });
    }
    catch (error) {
        res.send(error.message);
    }
}));
exports.router.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    try {
        const user = yield (0, user_services_1.deleteUser)(userId);
        res.send({
            message: "Successfully deleted user!",
            user,
        });
    }
    catch (error) {
        res.send(error.message);
    }
}));
exports.router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const { name, email, gender } = req.body;
    try {
        const user = yield (0, user_services_1.updateUser)(userId, name, email, gender);
        res.send({
            message: "Successfully update user!",
            user,
        });
    }
    catch (error) {
        res.send(error.message);
    }
}));
exports.router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    try {
        const user = yield (0, user_services_1.permanentlyDeleted)(userId);
        res.send({
            message: "Successfully deleted user permanently",
            user,
        });
    }
    catch (error) {
        res.send(error.message);
    }
}));
