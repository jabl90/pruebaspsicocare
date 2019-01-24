import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { template } from '@angular/core/src/render3';
import { templateSourceUrl } from '@angular/compiler';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { HttpClient, HttpParams, HttpResponseBase } from '@angular/common/http';
import { Message } from '../Modelos/Message';
import { HttpHeaders } from '@angular/common/http';
import { Test } from '../Modelos/Test';
import { User } from '../Modelos/User';
import { Intertable } from '../Modelos/intertable';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable()

export class UsuarioService {
  mensajes: HttpResponseBase[] = null;

  API_URL_Mail='http://localhost:8080/Psicocare/api/users/mail';
  API_URL_USER='http://localhost:8080/Psicocare/api/users/username';
  API_URL_USERbase='http://localhost:8080/Psicocare/api/users/';

  API_URL_test='http://localhost:8080/Psicocare/api/test/';


  deletetest(tid){

    return this._http.delete<Message>(this.API_URL_test+tid,httpOptions);
  }


  deleteuser(uid){

    return this._http.delete<boolean>(this.API_URL_USERbase+uid,httpOptions);
  }


  
  subidatablaintermedia(uid,tid){

    return this._http.post<Message>(this.API_URL_USERbase+"intermediate", {uid,tid},httpOptions);
  }

subidausuario(name,email,username,password){

  return this._http.post<User>(this.API_URL_USERbase, {name,email,username,password},httpOptions);

}


subidatest(anxiety,depression,stress,socialanxiety,respuesta1,respuesta2,respuesta3,respuesta4,respuesta5)  {

 //Test
  return this._http.post<Test>(this.API_URL_test, {respuesta1,respuesta2,respuesta3,respuesta4,respuesta5,anxiety,depression,socialanxiety,stress},httpOptions);
  



 //public boolean subidausuario(String nombrerec, String emailrec, String userrec, String password1rec, Double anxiedad, Double depresion, Double estres, Double anxiedadsocial,Double R1,Double R2,Double R3,Double R4,Double R5) throws SQLException {


}


  checkusername( usernamerec:string) {

    return this._http.get<Message>(`${this.API_URL_USER}/${usernamerec}`, {observe: "response" } )  }


  checkmail( emailrec:string) {

    return this._http.get<Message>(`${this.API_URL_Mail}/${emailrec}`, {observe: "response" } )  }




  
      validatecomponentes(anxiedad:number, depresion:number, estres:number,  anxiedadsocial:number) {
    //Los componentes son %s
         let ok:boolean=false;
        
    
        if ((typeof anxiedad === "number" )&&(anxiedad<=100)&&(typeof depresion === "number" )&&(depresion<=100)&&(typeof estres === "number" )&&(estres<=100)&&(typeof anxiedadsocial === "number" )&&(anxiedadsocial<=100)) {
          ok=true;
         console.log("las componentes estan bien" );
        }
    
        else {ok=false;console.log("Las componentes estan mal");}
        
        
        return ok;
      }

  someMethod() {
    ;
    return 'Hey!';
}
  countChar( str,  c)
	{
	    let count = 0;

	    for(let i=0; i < str.length-1; i++)
	    {    if(str.charAt(i) == c)
	            count++;
	    }

	    return count;
  }
  //Quiza añadir a la validacion que sea de los tipos correctos

  validateregisterform(nombrerec:string,emailrec:string,userrec:string,password1rec:string,password2rec:string) {
    
    console.log("Empieza el metodo");
    let ok = 1;
  
    if ((nombrerec == null) || (nombrerec=="")||(nombrerec.length<=3)) {//.length comprueba el numero de caracteres
      ok = 0;
      console.log("1 mal");
    }
     if ((emailrec == null) || (emailrec=="")||(this.countChar(emailrec,'@')!= 1)) {//Comprobar si mail (simplemente si no tiene una @
    
      ok = 0;
      console.log("2 mal");
    }
     if ((userrec == null) || (userrec=="")||(userrec.length<=3)) {
      ok = 0;
      console.log("3 mal");
    }
     if ((password1rec == null) || (password1rec=="") || (password1rec != password2rec)||(password1rec.length<=3)) {
      ok = 0;
      console.log(password1rec + "!=" + password2rec);
      console.log("4 mal");
    }
  
    else {}
  
    console.log("Empieza el metodo. Todo bien"+ok);
    
  
    // String regex = "[a-zA-Z0-9\\._\\-]{3,}";
    // OR || OR//
  
    return ok;
  

    
  }

 
  
  constructor(private _http:HttpClient) {     }



  }

