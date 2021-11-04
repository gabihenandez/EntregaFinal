import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage  {

  user = {
    nombre:'',
    apellidoP:'',
    apellidoM:'',
    email:'',
    telefono:'',
    flag:false,
  }
  

  constructor(private router:Router) { }
 
  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
 
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
 
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
      let apellidoM = new RegExp('^[A-Za-z? ]+$');
      if(!apellidoM.test(this.user.apellidoM)){
        this.user.flag = false
        
      }else{
        this.user.flag = true
      }
  }


  async onSubmit(_form: NgForm) {
    console.log(this.user);
    if(this.user.nombre.length<3 || this.user.apellidoP.length<3 || this.user.apellidoM.length<3 ){
      alert("Requisitos no cumplidos")
      
    }else{
      alert(this.user.nombre + ' : ' + this.user.apellidoP)
      this.router.navigate(['/dashboard/carousel']);
    }
  }

}
