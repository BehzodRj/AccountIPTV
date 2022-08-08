import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client-page',
  templateUrl: './add-client-page.component.html',
  styleUrls: ['./add-client-page.component.scss']
})
export class AddClientPageComponent implements OnInit {
  editingForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.editingForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      cotegory: new FormControl('', Validators.required),
      tarrif: new FormControl('', Validators.required),
      EPG: new FormControl('', Validators.required),
      main: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      icon: new FormControl('', Validators.required),
    })
    const editingFormData = {...this.editingForm.value}
    console.log(editingFormData);
  };

}
