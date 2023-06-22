import * as AWS from "aws-sdk";
import { SwapiModel } from "../model/SwapiModel";
import * as uuid from "uuidv4";

const doClient = new AWS.DynamoDB.DocumentClient({region : 'us-east-1'});
export class RimacRepository {
    async create(request: SwapiModel): Promise<SwapiModel> {
        request.id = uuid.uuid();
        const params = {
            TableName: "Swapi",
            Item: { ...request }
        };
        await doClient.put(params).promise();
        return request;
    }

    async list(): Promise<SwapiModel[]> {
        const response: SwapiModel[] = []
        const params = {
            TableName: "Swapi",
        };
        const getItem = await doClient.scan(params).promise();
        getItem?.Items!.forEach((item)  => {
            response.push(item as unknown as SwapiModel);
        })
        // console.log()
        return response;
    }
}