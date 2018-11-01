import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Appareil } from '../model/appareil';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';
import { AppareilStatus } from '../model/appareilStatus';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  appareilForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private appareilService : AppareilService,
    private router : Router) { }

  ngOnInit() {

    this.initForm();
  }

  initForm() {
    this.appareilForm = this.formBuilder.group({
      id: '',
      name: '',
      status: ''
    });
  }

  onSubmitForm() {
    const formValue = this.appareilForm.value;

    let status : AppareilStatus;

    if (formValue['status'] == '0') status = AppareilStatus.ALLUME;
    else status = AppareilStatus.ETEINT;

    const appareil = new Appareil(formValue['id'], formValue['name'], status);

    this.appareilService.addAppareil(appareil);
    this.router.navigate(['/appareils']);
  }
}
