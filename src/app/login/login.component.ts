import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string='';
  constructor(public _AuthService:AuthService, public _Router:Router) { }
  loginForm:FormGroup=new FormGroup({
    'Email': new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',[Validators.required,Validators.min(7)])
  });

  getRegisterData(formData:any){

    if(formData.valid==true){
     this._AuthService.signUp(formData.value).subscribe( (data: any) =>
       {
        if(data.message =='success'){
          this._AuthService.saveUserData(data.citizen,data.token);
         this._Router.navigate(['/home']);

        }
        else{
           this.error=data.message;
        }
       });
   }
 }

  ngOnInit(): void {
  }

}
