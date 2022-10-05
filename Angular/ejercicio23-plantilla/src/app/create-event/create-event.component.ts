import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event = {
    name: '',
    date: '',
    time: '',
    location: {
      address: '',
      city: '',
      country: ''
    }
  }

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent() {
    this.eventService.saveEvent(this.event);
    this.router.navigate(['/events']);
  }
}