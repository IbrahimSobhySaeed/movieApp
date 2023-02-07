import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sig-up',
  templateUrl: './sig-up.component.html',
  styleUrls: ['./sig-up.component.scss']
})
export class SigUpComponent implements OnInit {
error:string='';

constructor(public _AuthService:AuthService ,public _Router:Router) { }
  registraionForm:FormGroup=new FormGroup({
    'userName': new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(4)]),
    'Email': new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',[Validators.required,Validators.min(7)])
  });


  getRegisterData(formData:any){

   if(formData.valid==true){
    this._AuthService.signUp(formData.value).subscribe( (data: any) =>
      {
       if(data.message =='success'){
        this._Router.navigate(['/login'])
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
