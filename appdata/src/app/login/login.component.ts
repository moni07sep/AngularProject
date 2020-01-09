import { Ilogin } from './../shared/model/reg.interface';
import { Component, OnInit } from '@angular/core';
import{ Validators, FormGroup, FormBuilder} from  "@angular/forms";
import {Iregister} from '../shared/model/reg.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm:FormGroup;
  public submitted: boolean = false;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.userForm=this.fb.group({
      "UserLogin": this.fb.group({
        "UserName": ["", [Validators.required]],
        "Password": ["", [Validators.required]],
      })
    })
  }

  save(data:Ilogin){
    this.submitted = true;
    if (this.userForm.valid) {
      console.log('form submitted');
      alert("dsf")
    alert(data)
    console.log(data);
    } else {
      // validate all form fields
    }
    
  }

}
