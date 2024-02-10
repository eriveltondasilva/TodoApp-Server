"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../app/config/constants");
const apiError_1 = require("../app/services/apiError");
function isAuthenticated(req, _, next) {
    const { accessToken, refreshToken } = req.signedCookies;
    try {
        if (!accessToken || !refreshToken) {
            throw new apiError_1.UnauthorizedError('Failed to authenticate token');
        }
        const decoded = jsonwebtoken_1.default.verify(accessToken, constants_1.JWT_ACCESS_TOKEN_SECRET);
        req.user = decoded.user;
        next();
    }
    catch (error) {
        next(error);
    }
}
exports.default = isAuthenticated;
//# sourceMappingURL=isAuthenticated.js.map