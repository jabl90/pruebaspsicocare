import { Component } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular6TestMaterialize';
  ngOnInit() {
    $('select').formSelect();
  }

}