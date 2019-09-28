import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService, Activity } from '../../../src/app/firebase.service';

@Component({
  selector: 'app-activities-search',
  templateUrl: './activities-search.page.html',
  styleUrls: ['./activities-search.page.scss'],
})
export class ActivitiesSearchPage implements OnInit {
  activity: String = ''
  activities: Array<Activity>

  constructor(private activatedRoute: ActivatedRoute, private firebase: FirebaseService) { }

  ngOnInit() {
    this.activity = this.activatedRoute.snapshot.paramMap.get('activity');

    this.firebase.getActivities().subscribe(activities => {
      this.activities = activities
    })
  }

}
