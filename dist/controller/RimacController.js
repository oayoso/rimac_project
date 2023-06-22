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
exports.RimacController = void 0;
const SwapiModel_1 = require("../model/SwapiModel");
const Response_1 = require("../uilts/Response");
class RimacController {
    constructor(props) {
        this.props = props;
    }
    create(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = JSON.parse(event.body);
            const request = new SwapiModel_1.SwapiModel(body);
            const response = yield this.props.service.create(request);
            return Response_1.Response.return({ statusCode: 200, body: { id: response.id } });
            // return {
            //     statusCode: 200,
            //     body: JSON.stringify(
            //         {
            //             id: response.id,
            //         }
            //     ),
            // }
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.props.service.list();
            // return {
            //     statusCode: 200,
            //     body: JSON.stringify(response),
            // }
            return Response_1.Response.return({ statusCode: 200, body: response });
        });
    }
}
exports.RimacController = RimacController;
//# sourceMappingURL=RimacController.js.map