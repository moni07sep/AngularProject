import { Iregister } from './../shared/model/reg.interface';
import { Component, OnInit } from '@angular/core';
import{ Validators, FormGroup, FormBuilder} from  "@angular/forms"
import { Regx } from './regex';
import { Register } from '../shared/model/register.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public error:string;
  public userForm:FormGroup;
  public submitted: boolean = false;
  constructor(private fb : FormBuilder, private userreg:Register) { }

  ngOnInit() {
    this.userForm=this.fb.group({
      "FirstName":['',[Validators.required,Regx.FirstCharCapital]],
      "LastName":['',[Validators.required,Regx.FirstCharCapital]],
      "DOB" :['',[Validators.required]],
      "MobileNo":["",[Validators.required, Regx.MobileNo]],
      "EmailId": ["", [Validators.required,Regx.Email]],       
      "UserLogin": this.fb.group({
        "UserName": ["", [Validators.required]],
        "Password": ["", [Validators.required]],
      })

    })
  }
  save(data:Iregister ){
    this.submitted = true;
    if (this.userForm.valid) {
      
      this.userreg.userRegister(data).subscribe((item:any)=>{
        if(!item.Error){
          alert("done")
        }else{
          this.error=item.Error;
        }
      
      });
    } else {
      // validate all form fields
    }
    
  }

}
