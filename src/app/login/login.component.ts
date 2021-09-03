import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
// const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup 
  constructor(private fb:FormBuilder, private router:Router, private appService:AppService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, ])],
      password: ['', Validators.compose([Validators.required])],
      remember: [true]
    })
  }
login(){
  this.appService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
  .subscribe(
      matched => {
        if (matched) {
          this.router.navigateByUrl('app/home');
        } else {
          alert("Enter valid Details");
        }
      });
}

}
