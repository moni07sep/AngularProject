import { Ilogin } from './../shared/model/reg.interface';
import { Component, OnInit } from '@angular/core';
import{ Validators, FormGroup, FormBuilder} from  "@angular/forms";
import {Iregister} from '../shared/model/reg.interface';
import { Register } from '../shared/model/register.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm:FormGroup;
  public submitted: boolean = false;
  constructor(private fb : FormBuilder ,private userreg:Register) { }

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
      this.userreg.userLogin(data).subscribe((item:any)=>{ console.log(item)})
       
          alert("done")

    } 
  }
}
