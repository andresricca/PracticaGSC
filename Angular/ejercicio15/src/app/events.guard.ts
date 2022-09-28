import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class EventsGuard implements CanActivate {

  constructor(private service: EventsService) { }

  canDeactivate(component: EventDetailsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.reviewed;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const id = route.paramMap.get("id");
    if(id && this.service.getEventById(id)) {
      return true;
    }
    return false;    
  }
  
}
