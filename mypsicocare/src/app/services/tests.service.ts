import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponseBase } from '@angular/common/http';

@Injectable()


export class TestsService {
  mensajes: HttpResponseBase[] = null;

  API_URL_Mail='http://localhost:8080/Psicocare/api/users/mail';
  API_URL_USER='http://localhost:8080/Psicocare/api/users/username';
  API_URL_upload='http://localhost:8080/Psicocare/api/users/upload';



  constructor(private _http:HttpClient) {     }
}
