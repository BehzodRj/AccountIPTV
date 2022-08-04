import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-channel-add-page',
  templateUrl: './channel-add-page.component.html',
  styleUrls: ['./channel-add-page.component.scss']
})
export class ChannelAddPageComponent implements OnInit {
  channelAddForm!: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.channelAddForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      cotegory: new FormControl('', Validators.required),
      tarrif: new FormControl('', Validators.required),
      EPG: new FormControl('', Validators.required),
      main: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      icon: new FormControl('', Validators.required),
  })
  const channelAddFormData = {...this.channelAddForm.value}
  console.log(channelAddFormData);
}
}
