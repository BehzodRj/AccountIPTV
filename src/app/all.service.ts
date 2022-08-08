import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class requestsService {
  private url = "http://nets.tj:8000"

  constructor(private http: HttpClient, private router: Router) {}

  authRequest(account_id: number, password: any) {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post( this.url + "/api/auth/login", {"account_id": account_id, "password": password}, {headers: header})
  }

  refreshTokenRequest() {
    let header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('access_token')}`
    })
    return this.http.get( this.url + "/refresh", {headers: header})
  }

  error(error: any) {
    alert(error.error.Error)
    if(error.status == 401) {
      this.refreshTokenRequest().subscribe( (response: any) => {
        localStorage.setItem('access_token', response.access_token)
        localStorage.setItem('refresh_token', response.refresh_token)
        location.reload()
      }, error => {
        localStorage.clear()
        this.router.navigate(['/'])
      })
    }
  }

  getRequest() {}
  getRequestByID() {}


  postRequest() {}
  putRequest() {}


  deleteRequest() {}
}
