import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = 'http://localhost:5264/api/UserAPI';
  currUser:any=false;

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(this.url+'/users');
  };
  saveUsers(data:any){
    return this.http.post(this.url, data);
  };

  setCurrUser(data:any){
    this.currUser=data;
  };

  getCurrUser(){
    return this.currUser;
  }

}
