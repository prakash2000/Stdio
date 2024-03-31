import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [    
    { path: 'home', component: DashboardComponent },
    { path: 'studentlist', component: StudentListComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
