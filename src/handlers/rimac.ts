import {RimacController} from "../controller/RimacController";
import {RimacService} from "../service/RimacService";
import {RimacRepository} from "../repository/RimacRepository";

const controller = new RimacController({
    service: new RimacService({
        repository: new RimacRepository()
    })
})
export const handler = async (event: any) => {
    console.log('event -> ', event)
    if (event.requestContext.routeKey == 'POST /create'
        && event.rawPath == '/create') {
        return controller.create(event);
    }

    if (event.requestContext.routeKey == 'GET /list'
        && event.rawPath == '/list') {
        return controller.list();
    }
    return Promise.resolve();
}
