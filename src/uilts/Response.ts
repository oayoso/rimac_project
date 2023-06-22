import {APIGatewayProxyResult} from "aws-lambda";

export class Response {
    static return(payload: { statusCode: number, body: any }): APIGatewayProxyResult {
        return {
            statusCode: payload.statusCode,
            body: JSON.stringify(payload.body),
        };
    }
}