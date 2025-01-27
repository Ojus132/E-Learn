import { Component } from '@angular/core';
import { UserdataService } from './../services/userdata.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private userData : UserdataService){}

  currUser = this.userData.getCurrUser();

}
