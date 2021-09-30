import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = 'jccalderong';
  password: string = '123456';
  constructor(private loginService : LoginServiceService) { }

  ngOnInit(): void {
  }
  login(){
    const formData = new FormData();
    formData.append('usuario', this.usuario);
    formData.append('password', this.password);
    this.loginService.postLogin(formData).subscribe(
      (data)=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
