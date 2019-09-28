import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.page.html',
  styleUrls: ['./detail-activity.page.scss'],
})
export class DetailActivityPage implements OnInit {
  activity = null

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activity = this.activatedRoute.snapshot.paramMap.get('id');
    this.activity = {
      name: 'Ajedrez',
      date: '28/09/2019',
      hour: '19:20',
      available: '2/3',
      stars: 2,
      id: 1,
      image: './assets/images/actividadajedrez.jpg',
      description: `Ajedrez para personas mayores y adultos tienen también un lugar en Grandapp. Haciendo que los participantes, además de divertirse, desarrollen sus capacidades cognitivas. Y tengan la oportunidad de aprender a jugar al ajedrez en caso de que nunca lo hayan practicado antes.`,
      partner: {
        name: 'Carlos',
        image: './assets/images/partner-1.jpeg'
      },
      images: [
        './assets/images/lugar-ajedrez.jpeg',
        './assets/images/lugar-ajedrez.jpg',
      ],
      address: 'Calle 1 #1-1',
      inscribed: [
        {
          name: 'Nombre',
          description: 'ASDASDF',
          image: './assets/images/partner-1.jpeg'
        }
      ]
    }
  }

}
