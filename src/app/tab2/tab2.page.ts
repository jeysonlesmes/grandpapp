import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  event: String = 'progress'
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
      name: 'Caminata',
      date: '28/09/2019',
      hour: '19:20',
      available: '1/3',
      stars: 4,
      id: 5,
      image: './assets/images/run.jpg'
    }
  ]

  constructor() {}

  ngOnInit()
  {
  
  }

}
