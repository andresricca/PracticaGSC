import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from '../events-list/events-list.component';
import { EventsResolver } from '../events.resolver';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { EventsGuard } from '../events.guard';

const routes: Routes = [
  { path: 'list', component: EventsListComponent,
    resolve: {events: EventsResolver}},
  { path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventsGuard], canDeactivate: [EventsGuard]},
  { path: '', pathMatch: 'full', redirectTo: '/list'}
];

@NgModule({
  declarations: [
    EventsListComponent,
    EventDetailsComponent],
  providers:[EventsResolver],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
