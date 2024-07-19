import { Component } from '@angular/core';
import { UserdataService } from './../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  allUsers:any;

  constructor(private userData : UserdataService, private router: Router){}
  users = this.userData.getUsers().subscribe((res)=>{
    this.allUsers = res;
  });

  loginSuccess:any=false;

  getLoginFormData(data:any){
    console.log(data);
    for(let user of this.allUsers){
      if(((user.username==data.username)||(user.email==data.username))&&(user.password==data.password)){
        this.loginSuccess=user;
        break;
      }
    }

    if(this.loginSuccess){
      this.userData.setCurrUser(this.loginSuccess);
      alert("LOGIN SUCCESSFUL");
      this.router.navigate(['/profile']);
      
    } else {
      alert("LOGIN FAILED: WRONG CREDENTIALS");
    }

  }

}
