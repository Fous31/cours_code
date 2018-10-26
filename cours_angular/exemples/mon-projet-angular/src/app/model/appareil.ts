import { AppareilStatus } from "./appareilStatus";

export class Appareil {

    id: string;
    name: string;
    status: AppareilStatus;

    /**
     * Appareil
    pName: string, pStatus: string      */
    public constructor(public pId: string, public pName: string, public pStatus: AppareilStatus ) {
        this.id = pId;
        this.name = pName;
        this.status = pStatus;
    }

}