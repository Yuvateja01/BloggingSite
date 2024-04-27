"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blog = exports.userLogin = exports.userSignUp = void 0;
const zod_1 = require("zod");
const blog = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.blog = blog;
const userSignUp = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string().min(8),
    email: zod_1.z.string()
});
exports.userSignUp = userSignUp;
const userLogin = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.userLogin = userLogin;
