import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-cambio-pregunta',
  templateUrl: './footer-cambio-pregunta.component.html',
  styleUrls: ['./footer-cambio-pregunta.component.scss']
})
export class FooterCambioPreguntaComponent {

  paso:number;
  progreso:string='Total progress 1 out of 5';
  progressnumber:string;


  constructor() { }

  goNextPage(){}

  goPreviousPage(){}

  cambioDePantalla(){

    if (this.paso = 1) {
    
      this.progreso='Total progress 1 out of 5' 
      this.progressnumber='1 of 5'
    
  }
  if (this.paso == 2) {

    this.progreso='Total progress 2 out of 5';
    this.progressnumber='2 of 5'
    
  } else if (this.paso == 3) {

    this.progreso='Total progress 3 out of 5';
    this.progressnumber='3 of 5'
  
     
  
  } else if (this.paso == 4) {

    this.progreso='Total progress 4 out of 5';
    this.progressnumber='4 of 5'
      
     
  } else if (this.paso == 5) {
    
    this.progreso='Total progress 5 out of 5';
    this.progressnumber='5 of 5'
     

      
  }
  
  
    }

  

}
