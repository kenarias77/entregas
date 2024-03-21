"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tareaSchema = exports.Tarea = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Tarea = class Tarea extends mongoose_2.Document {
};
exports.Tarea = Tarea;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        minlength: 5
    }),
    __metadata("design:type", String)
], Tarea.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        min: 1,
        max: 5
    }),
    __metadata("design:type", Number)
], Tarea.prototype, "prioridad", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", Date)
], Tarea.prototype, "fecha", void 0);
exports.Tarea = Tarea = __decorate([
    (0, mongoose_1.Schema)()
], Tarea);
exports.tareaSchema = mongoose_1.SchemaFactory.createForClass(Tarea);
//# sourceMappingURL=tarea.entity.js.map