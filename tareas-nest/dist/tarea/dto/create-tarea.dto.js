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
exports.CreateTareaDto = void 0;
const class_validator_1 = require("class-validator");
class CreateTareaDto {
}
exports.CreateTareaDto = CreateTareaDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "El nombre debe ser un texto" }),
    (0, class_validator_1.MinLength)(3, { message: "El nombre debe contener al menos 3 letras" }),
    __metadata("design:type", String)
], CreateTareaDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "La prioridad es obligatoria" }),
    (0, class_validator_1.IsInt)({ message: "La prioridad debe ser un número entero" }),
    (0, class_validator_1.Min)(0, { message: "La prioridad minima es 1" }),
    (0, class_validator_1.Max)(120, { message: "La prioridad maxima es 5" }),
    __metadata("design:type", Number)
], CreateTareaDto.prototype, "prioridad", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "la fecha es obligatoria" }),
    __metadata("design:type", Date)
], CreateTareaDto.prototype, "fecha", void 0);
//# sourceMappingURL=create-tarea.dto.js.map