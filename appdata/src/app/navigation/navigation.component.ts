import { Component, OnInit } from '@angular/core';
import { Register } from '../shared/model/register.services';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor( private userreg:Register) { }

  ngOnInit() {
  }

  logout(){

    this.userreg.logout();
  }

}
