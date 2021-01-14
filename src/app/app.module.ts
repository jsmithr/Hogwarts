import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstudiantesComponent, EstudianteDialog } from './components/estudiantes/estudiantes.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { RouterModule } from '@angular/router';
import routes from './routes';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    PersonajesComponent,
    ProfesoresComponent,
    DashboardComponent,
    EstudianteDialog
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
