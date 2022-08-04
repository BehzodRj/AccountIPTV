import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.scss']
})
export class ChannelPageComponent implements OnInit {
  channelForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.channelForm = new FormGroup({
      search: new FormControl('', Validators.required),
    })
    const channelFormData = {...this.channelForm.value}
    console.log(channelFormData);
  }

}
