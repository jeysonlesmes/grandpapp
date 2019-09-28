import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

	event: String = 'coming'
  activities: Array<any> = [
    {
      name: 'Ajedrez',
      date: '28/09/2019',
      hour: '19:20',
      available: '2/3',
      stars: 2,
      id: 1,
      image: './assets/images/ajedrez.jpg'
    },
    {
      name: 'Caminata en el parque',
      date: '28/09/2019',
      hour: '19:20',
      available: '1/3',
      stars: 4,
      id: 5,
      image: './assets/images/run.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
