import { Appareil } from "../model/appareil";
import { AppareilStatus } from "../model/appareilStatus";
import { Subject } from "rxjs";

export class AppareilService {

    appareilsSubject = new Subject<any[]>();

    private appareils = Array<Appareil>();

    constructor() {
        this.appareils.push(new Appareil('LAVE', 'Machine à laver', AppareilStatus.ETEINT));
        this.appareils.push(new Appareil('BIDULE', 'Bidule', AppareilStatus.ETEINT));
    }

    emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
    }

    getAppareilById(pId: string): Appareil {
        let result: Appareil;

        for (let appareil of this.appareils) {

            if (appareil.id === pId) {
                result = appareil;
            }
        }

        return result;
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = AppareilStatus.ALLUME;
            this.emitAppareilSubject();
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = AppareilStatus.ETEINT;
            this.emitAppareilSubject();
        }
    }

    switchOnOne(i: number) {
        console.log("switchOnOne" + i);
        let index = 0;
        for (let appareil of this.appareils) {
            if (i == index) {
                appareil.status = AppareilStatus.ALLUME;
                this.emitAppareilSubject();
            }
            index++;
        }
    }

    switchOffOne(i: number) {
        let index = 0;
        for (let appareil of this.appareils) {
            if (i == index) {
                appareil.status = AppareilStatus.ETEINT;
                this.emitAppareilSubject();
            }
            index++;
        }
    }
}