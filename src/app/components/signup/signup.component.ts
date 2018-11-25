import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage:string;
  showSpinner:boolean;
  constructor(private router:Router, private AuthService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.init();
  }
  init() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],

      email: ['', [Validators.email, Validators.required]],

      password: ['', Validators.required]
    });
  }
  signupUser() {
    this.showSpinner=true;
    console.log(this.signupForm.value)
    this.AuthService.registerUser(this.signupForm.value).subscribe(
      data => {
        console.log(data);
        this.signupForm.reset();
        setTimeout(()=>{
          this.router.navigate(['streams']);
        },2000);
        
      },
      err => {
        this.showSpinner=false;
        console.log(err);
        if(err.error.msg){
          this.errorMessage=err.error.msg[0].message;

        }
        if(err.error.message){
          this.errorMessage=err.error.message;

        }
      }
    );
  }
}
