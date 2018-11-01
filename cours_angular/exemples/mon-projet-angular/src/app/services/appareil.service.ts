import { Appareil } from "../model/appareil";
import { AppareilStatus } from "../model/appareilStatus";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AppareilService {

    appareilsSubject = new Subject<any[]>();

   public appareilsBD : AngularFireList<Appareil[]>;

    private appareils = Array<Appareil>();


    constructor(private httpClient : HttpClient, private db : AngularFireDatabase) {
        this.appareils.push(new Appareil('LAVE', 'Machine à laver', AppareilStatus.ETEINT));
        this.appareils.push(new Appareil('BIDULE', 'Bidule', AppareilStatus.ETEINT));

        this.appareilsBD = db.list('/appareils');

      let machineAlaver[] = new Appareil('LAVE', 'Machine à laver', AppareilStatus.ETEINT);
      this.appareilsBD.push(machineAlaver);
    }

    saveAppareilsToServer() {
        this.httpClient
          .post('https://appareil-c9c1f.firebaseio.com/appareils.json', this.appareils)
          .subscribe(
            () => {
              console.log('Enregistrement terminé !');
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
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

    addAppareil(appareil : Appareil) {
        this.appareils.push(appareil);
        this.emitAppareilSubject;
    }
}