"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    static return(payload) {
        return {
            statusCode: payload.statusCode,
            body: JSON.stringify(payload.body),
        };
    }
}
exports.Response = Response;
//# sourceMappingURL=Response.js.map