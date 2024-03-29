"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CustomBox = (props) => {
    const { width, height, bgColor, content = "Texto de ejemplo", color } = props;
    return (react_1.default.createElement("div", { style: {
            width: width || 200,
            height: height || 200,
            backgroundColor: bgColor || "green",
            color: color || "white",
        } }, content));
};
exports.default = CustomBox;
