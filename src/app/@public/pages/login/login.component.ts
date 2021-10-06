import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { ResultLogin } from '../../../interfaces/login-interface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fechaActual = new Date().getFullYear();
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginServiceService) {
    this.loginForm = fb.group ({
      usuario:['', Validators.required],
      password:['', Validators.required],
    })
   }

  ngOnInit(): void {
       
    
  }
  crearToken(){
    const formData = new FormData();
    console.log(this.loginForm.get('usuario')?.value);
    
    formData.append('usuario', this.loginForm.get('usuario')?.value);
    formData.append('password', this.loginForm.get('password')?.value);

    this.loginService.postLogin(formData).subscribe(
      (data:ResultLogin)=>{

        if (!data.ok) {
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: data.msg,
            showConfirmButton: false,
            timer: 1500
          })
        } 
        else{
          Swal.fire({
            title: 'Buen trabajo',
            text: data.msg,
            icon: 'success',
            confirmButtonText: 'Yes, delete it!',
          }).then((result) => {
            if (result.isConfirmed) {
              
            } 
          })
        }
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
    
  }
}
