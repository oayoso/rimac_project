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
exports.handler = void 0;
const RimacController_1 = require("../controller/RimacController");
const RimacService_1 = require("../service/RimacService");
const RimacRepository_1 = require("../repository/RimacRepository");
const controller = new RimacController_1.RimacController({
    service: new RimacService_1.RimacService({
        repository: new RimacRepository_1.RimacRepository()
    })
});
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('event -> ', event);
    if (event.requestContext.routeKey == 'POST /create'
        && event.rawPath == '/create') {
        return controller.create(event);
    }
    if (event.requestContext.routeKey == 'GET /list'
        && event.rawPath == '/list') {
        return controller.list();
    }
    return Promise.resolve();
});
exports.handler = handler;
//# sourceMappingURL=rimac.js.map