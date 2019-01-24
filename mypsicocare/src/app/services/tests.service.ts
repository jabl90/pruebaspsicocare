import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Test } from '../Modelos/Test';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestsService {  //La clase Test realmente se tendría que llamar Respuesta

 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  API_URL='http://localhost:8080/Psicocare/api/test';

  preguntas:any[];
  progresoPregunta:number;
  
  constructor (private _http:HttpClient) { }

  private _Test: Test[] = [     //Inicalizamos los objetos tipo respuesta
		new Test(1, 0, 0, 0, 0, 0)
  ];
  


 /** POST: añade un nuevo Test (respuestas) a la base de datos */
 addTestFromApiByTid(testNuevo: Test):Observable<Test>{
  return this._http.post<Test>(this.API_URL, testNuevo, this.httpOptions);
  
}

//GET: nos muestra una lista de test disponibles en la base de datos
  getTestFromApi():Observable<Test[]>{
    const ApiTest  = this._http.get<Test[]>(this.API_URL);
    console.log("Este es el test");
    return ApiTest;
    
  }

  //GET: nos devuelve un test en concreto en base a su identificador
  getTestFromApiByTid(tid: number):Observable<Test>{
    const ApiTestTid = this._http.get<Test>(`${this.API_URL}/${tid}`)
    console.log(ApiTestTid);
    
   return ApiTestTid;

  }
/** DELETE: borramos un test del servidor */
  deleteTestFromApiByTid(tid: number):Observable<Test>{
    const ApiTestTidBorrar = this._http.delete<Test>(`${this.API_URL}/${tid}`)
    console.log(ApiTestTidBorrar);
    
   return ApiTestTidBorrar;

  }
/** PUT: actualiza un test en el servidor y devuelve el test actualizado en caso de éxito */
  updateTestFromApiByTid(tid: number):Observable<Test>{
    const ApiTestTidUpdate = this._http.put<Test>(`${this.API_URL}/${tid}`, tid)
    console.log(ApiTestTidUpdate);
    
   return ApiTestTidUpdate;

  }




  
    
  } 
      



