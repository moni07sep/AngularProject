import { Component, OnInit } from '@angular/core';
import { Register } from '../shared/model/register.services';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public currentUserData
  constructor( private userreg:Register) { }


  ngOnInit() {

    this.userreg.userData.subscribe(x=>{this.currentUserData=x;
    console.log(this.currentUserData);
    })

  }

  logout(){

    this.userreg.logout();
  }

}
