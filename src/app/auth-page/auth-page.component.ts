import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { requestsService } from '../all.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  authForm!: FormGroup

  constructor(private request: requestsService, private router: Router) {}

  ngOnInit() {
    this.authForm = new FormGroup({
      account_id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  logIn() {
    const authFormData = {...this.authForm.value}
    this.request.authRequest(authFormData.account_id, authFormData.password).subscribe(response => {
      console.log(response);
      // this.router.navigate(['/channel'])
    }, error => {
      alert(error.error.error)
    })
  }

}
