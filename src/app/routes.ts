import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
const routes: Routes = [
    {
        path: '', component: DashboardComponent
    },
    {
        path: 'personajes', component: PersonajesComponent
    },
    {
        path: 'estudiantes', component: EstudiantesComponent
    },
    {
        path: 'profesores', component: ProfesoresComponent,
    },
];

export default routes;