"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controllers/authController"));
const authValidation_1 = __importDefault(require("../middlewares/validations/authValidation"));
const userModel_1 = __importDefault(require("../models/userModel"));
const response_1 = __importDefault(require("../app/services/response"));
const prisma_1 = __importDefault(require("../app/singletons/prisma"));
const router = (0, express_1.Router)();
const response = new response_1.default();
const userModel = new userModel_1.default(prisma_1.default);
const authController = new authController_1.default(response, userModel);
router.post('/auth/register', authValidation_1.default.register, authController.register);
router.post('/auth/login', authValidation_1.default.login, authController.login);
router.post('/auth/logout', authController.logout);
router.post('/auth/refresh-token', authController.refresh);
router.get('/auth/teste', (_, res) => {
    res.send('teste de rota auth!');
});
exports.default = router;
//# sourceMappingURL=authRoutes.js.map