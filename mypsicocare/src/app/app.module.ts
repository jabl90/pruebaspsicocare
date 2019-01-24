import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ActividadComponent } from './actividad/actividad.component';
import { HeaderComponent } from './header/header.component';
import { HomeactividadesComponent } from './homeactividades/homeactividades.component';
import { AboutComponent } from './about/about.component';
import { ProgressComponent } from './progress/progress.component';
// import { TestComponent } from './test/test.component';
import { PerfilComponent } from './perfil/perfil.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { FooterCambioPreguntaComponent } from './footer-cambio-pregunta/footer-cambio-pregunta.component';
import { NTestComponent } from './ntest/ntest.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActividadComponent,
    HeaderComponent,
    HomeactividadesComponent,
    AboutComponent,
    ProgressComponent,
    // TestComponent,
    PerfilComponent,
    WelcomeComponent,
    MenuComponent,
    ConfigComponent,
    HomeComponent,
    ResultsComponent,
    FooterCambioPreguntaComponent,
    NTestComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
