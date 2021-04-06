"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
var uuid_1 = require("uuid");
exports.todos = [
    {
        id: uuid_1.v4(),
        title: '1st todo',
        description: '1st todo desc'
    },
    {
        id: uuid_1.v4(),
        title: '2nd todo',
        description: '2nd todo desc'
    },
    {
        id: uuid_1.v4(),
        title: '3rd todo',
        description: '3rd todo desc'
    }
];
