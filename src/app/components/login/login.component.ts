import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private servicios: UsuariosService, private ruta: Router){}

  nick:string="";
  clave:string="";

  crearJSON(){
    const data={
      id: this.nick,
      pass: this.clave
    }
    this.limpiar()

    return data;
  }

  limpiar(){
    this.nick="";
    this.clave="";
  }


  login(){
    const temp = this.crearJSON()
    
    this.servicios.getUsuarios().subscribe(nick =>{
      for( const doc of nick){
        if( JSON.stringify(temp) === JSON.stringify(doc)){
          console.log("acceso permitido")   
          localStorage.setItem('login', 'true')  

          //navegar
          this.ruta.navigate(['/privado'])

          break;  
            
        } else{
          localStorage.setItem('login', 'false')
          this.ruta.navigate(['/registro'])
        }

      }

    })

  }

}
