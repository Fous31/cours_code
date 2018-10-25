import { AppareilStatus } from "./appareilStatus";

export class Appareil {

    name: string;
    status: AppareilStatus;

    /**
     * Appareil
    pName: string, pStatus: string      */
    public constructor(public pName: string, public pStatus: AppareilStatus ) {
        this.name = pName;
        this.status = pStatus;
    }

}