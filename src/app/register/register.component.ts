import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{


registerForm:FormGroup = new FormGroup({
  first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  age:new FormControl(null,[Validators.required,Validators.min(16),Validators.max(60)]),
 email:new FormControl(null,[Validators.required,Validators.email ]),
  // password:new FormControl(null,[Validators.requiredgit remote add origin https://github.com/petronile/Ang-test.git]),
});
submitRegisterForm(registerForm:FormGroup)
{
  console.log(registerForm);
}
constructor() {}
ngOnInit():void {}
}


