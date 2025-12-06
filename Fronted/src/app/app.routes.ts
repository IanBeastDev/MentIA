import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Home } from './home/home';
import { Record } from './home/record/record';
import { User } from './user/user';
import { Routines } from './user/routines/routines';
import { Comunidad } from './user/comunidad/comunidad';
import { RedApoyo } from './user/red-apoyo/red-apoyo';
export const routes: Routes = [
  { path: '', component: Welcome }, // ruta inicial → Welcome
  { path: 'home', component: Home }, // ruta Home
  { path: 'record', component: Record }, // ruta Home
  { path: 'user', component: User}, // ruta Home
  { path: 'routines', component: Routines}, // ruta Home
  { path: 'comunidad', component: Comunidad}, // ruta Home
  { path: 'red-apoyo', component: RedApoyo}, // ruta Home
];
