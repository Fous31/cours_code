import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Appareil } from '../model/appareil';
import { AppareilStatus } from '../model/appareilStatus';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: AppareilStatus = AppareilStatus.ALLUME;

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
   let appareil = this.appareilService.getAppareilById(this.route.snapshot.params['id']);
    
   if (appareil != null) {
     this.name = appareil.name;
     this.status = appareil.status;
   }
  }

}
