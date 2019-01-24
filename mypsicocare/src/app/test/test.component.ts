import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from '../Modelos/Test';
import { TestsService } from '../services/tests.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

//Se llama la clase test pero en realidad se debería llamar respuesta ya que gestionamos únicamente las respuestas del Test que es lo que 
//se va a enviar a la API, las preguntas y el cambio de página están en otro componente.

export class TestComponent implements OnInit { //Export significa que la clase es pública

  tid: number;
  tests: Test[] = null;
  paso: number = 1;

  respuesta1: any;
  respuesta2: any;
  respuesta3: any;
  respuesta4: any;
  respuesta5: any;

  _newTest = new Test();


  /*onFormSubmit(respuesta: NgForm) {
      
    respuesta1=respuesta.controls['respuestainput].value;
    respuesta2=respuesta.controls['respuesta2].value;
    respuesta3=respuesta.controls['respuesta3].value;
    respuesta4=respuesta.controls['respuesta4].value;
    respuesta5=respuesta.controls['respuesta5].value;
    if (!respuesta.valid) {
        return;
    } else {
        this.testService.addTest(this._newTest);
        this._router.navigate(['test']);
        console.log('Formulario:', respuesta);
    }*/

  getRespuestas(respuesta: NgForm) {  //Tengo que coger en cada paso las respuestas de cada paso del formulario.

    if (this.paso = 1) {
      //Hay que capturar respuestainput y asociarlo a respuesta1;
      //this._newTest.respuesta1=respuestainput;   
    }
    if (this.paso == 2) {


    } else if (this.paso == 3) {



    } else if (this.paso == 4) {


    } else if (this.paso == 5) {


    }


  }

  constructor(private router: Router, private testService: TestsService) {

    this._newTest.respuesta1;
    this._newTest.respuesta2;
    this._newTest.respuesta3;
    this._newTest.respuesta4;
    this._newTest.respuesta5;
  }



  ngOnInit() {

    this.testService.getTestFromApi().subscribe(testsRecibido =>
      this.tests = testsRecibido);

    this.testService.getTestFromApiByTid(this.tid).subscribe(unTest =>
      this._newTest = unTest);

    this.testService.deleteTestFromApiByTid(this.tid).subscribe(unTest =>
      this._newTest = unTest);

    this.testService.updateTestFromApiByTid(this.tid).subscribe(unTest =>
      this._newTest = unTest);

    this.testService.addTestFromApiByTid(this._newTest).subscribe(testadded =>
      this._newTest = testadded);




  }


}




/*  respuesta(){
    console.log(this.answer);
    this.testService.answer(this.answer.respuestainput).subscribe(respuesta=>{
      console.log(respuesta);
      localStorage.setItem('token', respuesta.message); //Guardamos la respuesta en el localstorage
      this.router.navigate(['/b']); //ir hacia la siguiente pregunta
    })
  }


  onClick(this.tid:number){
    this.testService.addTestFromApiByTid(tid).subscribe(res =>{
      this.router.navigate(['test/tid',tid]);
    }
      );
    console.log(tid);

  }*/
