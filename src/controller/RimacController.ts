import { RimacService } from "../service/RimacService";
import {SwapiModel} from "../model/SwapiModel";
import { Context, APIGatewayProxyCallback, APIGatewayEvent, APIGatewayProxyResult,
    APIGatewayProxyEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import {Response} from "../uilts/Response";

interface Props {
    service: RimacService
}
export class RimacController {
    constructor(private props: Props) {}

    async create(event: any): Promise<APIGatewayProxyResult> {
        const body = JSON.parse(event.body)
        const request = new SwapiModel(body);
        const response = await this.props.service.create(request);

        return Response.return({ statusCode: 200, body: { id: response.id } })

        // return {
        //     statusCode: 200,
        //     body: JSON.stringify(
        //         {
        //             id: response.id,
        //         }
        //     ),
        // }
    }

    async list(): Promise<APIGatewayProxyResult> {
        const response = await this.props.service.list();

        // return {
        //     statusCode: 200,
        //     body: JSON.stringify(response),
        // }

        return Response.return({ statusCode: 200, body: response })
    }
}