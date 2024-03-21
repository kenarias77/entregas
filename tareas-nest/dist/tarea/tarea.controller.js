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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaController = void 0;
const common_1 = require("@nestjs/common");
const tarea_service_1 = require("./tarea.service");
const create_tarea_dto_1 = require("./dto/create-tarea.dto");
const update_tarea_dto_1 = require("./dto/update-tarea.dto");
let TareaController = class TareaController {
    constructor(tareaService) {
        this.tareaService = tareaService;
    }
    create(createTareaDto) {
        return this.tareaService.create(createTareaDto);
    }
    findAll() {
        return this.tareaService.findAll();
    }
    findOne(id) {
        return this.tareaService.findOne(+id);
    }
    update(id, updateTareaDto) {
        return this.tareaService.update(+id, updateTareaDto);
    }
    remove(id) {
        return this.tareaService.remove(+id);
    }
};
exports.TareaController = TareaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tarea_dto_1.CreateTareaDto]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tarea_dto_1.UpdateTareaDto]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "remove", null);
exports.TareaController = TareaController = __decorate([
    (0, common_1.Controller)('tarea'),
    __metadata("design:paramtypes", [tarea_service_1.TareaService])
], TareaController);
//# sourceMappingURL=tarea.controller.js.map