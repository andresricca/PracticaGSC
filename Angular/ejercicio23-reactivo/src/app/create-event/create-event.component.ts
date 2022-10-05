import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  eventForm = this.fb.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    location: this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', [Validators.required, Validators.pattern('[A-Z]{2}')]]
    })
  });

  constructor(private eventService: EventService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent() {
    this.eventService.saveEvent(this.eventForm.value);
    this.router.navigate(['/events']);
  }
}
