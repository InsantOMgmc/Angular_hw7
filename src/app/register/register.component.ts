import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  login: string ='';
  password: string ='';
  email: string ='';
  name: string ='';
  data!: string

  constructor(private http: HttpClient) {}

  registerUser() {
    console.log(this.login)
    const apiKey = 'X9ZO2Lqf'
    const apiUrl = `https://api.nancydrew.me/addUser?key=${apiKey}&login=${this.login}&password=${this.password}&name=${this.name}&email=${this.email}&lang=kk`

    this.http.get(apiUrl).subscribe(data => {
      this.data = JSON.stringify(data)
      console.log((this.data))
    })
  }
}
