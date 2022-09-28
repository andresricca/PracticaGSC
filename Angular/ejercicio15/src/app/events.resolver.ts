import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EventsService } from './events.service';
import { IEvent } from './ievent';

@Injectable({
  providedIn: 'root'
})
export class EventsResolver implements Resolve<IEvent[]> {

  constructor(private service: EventsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IEvent[] {
    return this.service.getEvents();
  }
}
