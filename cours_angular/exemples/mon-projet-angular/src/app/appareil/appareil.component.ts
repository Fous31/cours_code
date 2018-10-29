import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { AppareilStatus } from '../model/appareilStatus';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: AppareilStatus;
  @Input() index: number;
  @Input() id: string;
  
  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === AppareilStatus.ALLUME) {
      return 'green';
    } else {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus === AppareilStatus.ALLUME) {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === AppareilStatus.ETEINT) {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
