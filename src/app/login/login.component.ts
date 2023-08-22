import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  password: string = ''
  data!: string

  constructor(private http: HttpClient) {}

  submitForm() {
    const apiKey = 'X9ZO2Lqf'
    const apiUrl = `https://api.nancydrew.me/authUser?key=${apiKey}&login=${this.login}&password=${this.password}&lang=kk`

    // this.info = this.http.get(apiUrl)
    // console.log(JSON.stringify(this.info))

    this.http.get(apiUrl).subscribe(data => {
      this.data = JSON.stringify(data)
      console.log((this.data))
    })
  }
}