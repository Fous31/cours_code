import { Appareil } from "../model/appareil";
import { AppareilStatus } from "../model/appareilStatus";

export class AppareilService {

    appareils = Array<Appareil>();

    constructor() {
        this.appareils.push(new Appareil('LAVE','Machine à laver', AppareilStatus.ETEINT));
        this.appareils.push(new Appareil('BIDULE','Bidule', AppareilStatus.ETEINT));
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
        console.log("switchOnOne" + i);
        let index = 0;
        for (let appareil of this.appareils) {
            if (i == index) {
                appareil.status = AppareilStatus.ALLUME;
            }
            index++;
        }
    }

    switchOffOne(i: number) {
        let index = 0;
        for (let appareil of this.appareils) {
            if (i == index) {
                appareil.status = AppareilStatus.ETEINT;
            }
            index++;
        }
    }
}