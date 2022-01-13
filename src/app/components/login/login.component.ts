import { Component, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SessionServiceService } from 'src/app/services/session-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalVariableURL } from 'src/app/GlobalVariables';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output() register: EventEmitter<any> = new EventEmitter();
  username: string = "";
  password: string = "";
  submitted = false;
  authenticationFailed = false;
  forma: FormGroup;
  constructor(private loginService: FirebaseService, private router: Router, private session: SessionServiceService, private fb:
    FormBuilder) {

    this.forma = this.fb.group({

      email: fb.control('', [Validators.email, Validators.required]),
      password: fb.control('', [Validators.minLength(6), Validators.required]),
    })

  }

  ngOnInit(): void {

  }

  async login() {
    this.submitted = true;

    if (this.forma.valid)
    

    this.loginService.signin(this.username, this.password).then(
      () => {
     

        if (sessionStorage.getItem('login') == "true") {
          sessionStorage.setItem('username', this.username)

          this.router.navigate([GlobalVariableURL.FEED_URL])

        }
    
      }
    ).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode = "auth/user-not-found"){
     this.authenticationFailed=true;
        
      }
      // ...
   });


  }

  registerRedirect() {
    this.router.navigate([GlobalVariableURL.REGISTER_URL])

  }

  public control(name: string) {
    console.log(this.forma.get(name)?.errors)
    return this.forma.get(name);
  }
}
