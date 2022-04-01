import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.form = formBuilder.group({
      'name': ['', Validators.required],
      'username' : ['', Validators.required],
      'email' : ['', [Validators.required, Validators.email]], //si quereos mas de una valid van entre []
      'password' : ['', [Validators.required, Validators.minLength(8)]],
      'confirm': ['', [Validators.required, Validators.minLength(8)]]
    },{
      validators: this.matchPassword.bind(this) //necesitamos pasarle el mismo contexto
    })
  }

  sendData(){
    if(this.form.valid){
      console.log('Enviar datos');
    }else{
      console.log('Error, faltan datos');
    }
  }
  matchPassword(){
    if(!this.form) return;
    const { password, confirm} = this.form.getRawValue();
    if(password == confirm){
      return null; //no hay error
    }else{
      return { passwordMisMatch: true} //retornamos el error
    }
  }

  ngOnInit(): void {
  }

}
