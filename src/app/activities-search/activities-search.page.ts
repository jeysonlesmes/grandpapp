import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activities-search',
  templateUrl: './activities-search.page.html',
  styleUrls: ['./activities-search.page.scss'],
})
export class ActivitiesSearchPage implements OnInit {
  activity: String = ''
  activities: Array<any> = [
    {
      name: 'Caminar en el parque',
      date: '28/09/2019',
      hour: '19:20',
      available: '2/3',
      stars: 2,
      id: 1,
      image: './assets/images/run.jpg'
    },
    {
      name: 'Caminata por la ciudad',
      date: '28/09/2019',
      hour: '19:20',
      available: '1/3',
      stars: 4,
      id: 5,
      image: './assets/images/run.jpg'
    }
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activity = this.activatedRoute.snapshot.paramMap.get('activity');
    
  }

}
