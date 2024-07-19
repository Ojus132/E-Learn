import { Component } from '@angular/core';
import { UserdataService } from './../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userData : UserdataService, private router:Router){}
  allUsers:any;

  users = this.userData.getUsers().subscribe((res)=>{
    this.allUsers = res;
  });


  getUserFormData(data:any){
    data.role = "student";
    
    if(data.password.length<8){
      alert("PASSWORD MUST BE ATLEAST 8 CHARACTERS LONG!!");
    } else {
      this.userData.saveUsers(data).subscribe((res)=>{
        alert('REGISTERED SUCCESSFULLY');
        this.router.navigate(['/login']);
    })
    }
  }
}
