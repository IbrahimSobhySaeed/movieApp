import { UserData } from './../UserData';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  userData = new BehaviorSubject(null) ;


  signUp(data:any):Observable<any>{

    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', data);

  };

  signIn(data:any):Observable<any>{

    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', data);

  }

saveUserData(citizen: { first_name: any; last_name: any; email: any; },token: any){

  let user=new UserData(citizen.first_name,citizen.last_name,citizen.email,token);
  // this.userData.next(user);
}

}
