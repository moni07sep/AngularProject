import { Component, OnInit } from '@angular/core';
import{ Validators, FormGroup, FormBuilder} from  "@angular/forms"
import { Regx } from './regex';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public userForm:FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.userForm=this.fb.group({
      "firstname":['',[Validators.required]],
      "lastname":['',[Validators.required]],
      "password": ["", [Validators.required,Regx.Password]],
      "email": ["", [Validators.required,Regx.Email]],
      "UserLogin": this.fb.group({
        "userid": ["", [Validators.required,Regx.Userid]],
        "mobileNo":["",[Validators.required, Regx.MobileNo]],
      }),
      "Address": this.fb.group({
        "country": ["", [Validators.required]],
        "state":["",[Validators.required]],
        "city":["",[Validators.required]]
      })

    })
  }

}
