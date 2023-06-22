import {RimacRepository} from "../repository/RimacRepository";
import {SwapiModel} from "../model/SwapiModel";

interface Props {
    repository: RimacRepository
}
export class RimacService {
    constructor(private props: Props) {}

    async create(request: SwapiModel): Promise<SwapiModel> {
        return this.props.repository.create(request);
    }

    async list(): Promise<SwapiModel[]> {
        return this.props.repository.list();
    }
}