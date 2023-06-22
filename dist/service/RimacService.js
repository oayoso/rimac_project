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
exports.RimacService = void 0;
class RimacService {
    constructor(props) {
        this.props = props;
    }
    create(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.props.repository.create(request);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.props.repository.list();
        });
    }
}
exports.RimacService = RimacService;
//# sourceMappingURL=RimacService.js.map