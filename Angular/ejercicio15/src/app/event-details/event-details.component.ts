import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';
import { IEvent } from '../ievent';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent | undefined;
  reviewed = false;

  constructor(
    private route: ActivatedRoute,
    private service: EventsService,
    private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.event = this.service.getEventById(id);
  }

  returnToEvents(): void {
		this.router.navigateByUrl("/list");
	}

  changeReviewed(): void {
    this.reviewed = !this.reviewed;
  }
}
