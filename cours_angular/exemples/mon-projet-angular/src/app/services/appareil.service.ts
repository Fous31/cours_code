import { Appareil } from "../model/appareil";
import { AppareilStatus } from "../model/appareilStatus";

export class AppareilService {

    appareils = Array<Appareil>();

constructor() {
    this.appareils.push(new Appareil('Machine à laver', AppareilStatus.ETEINT));
    this.appareils.push(new Appareil('Bidule', AppareilStatus.ETEINT));
}

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = AppareilStatus.ALLUME;
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = AppareilStatus.ETEINT;
        }
    }

    switchOnOne(i: number) {
        let appareil = this.appareils[i];
        appareil.status = AppareilStatus.ALLUME;
    }

    switchOffOne(i: number) {
        this.appareils[i].status = AppareilStatus.ETEINT;
    }
}