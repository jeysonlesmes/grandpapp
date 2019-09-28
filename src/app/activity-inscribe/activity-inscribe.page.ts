import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-activity-inscribe',
  templateUrl: './activity-inscribe.page.html',
  styleUrls: ['./activity-inscribe.page.scss'],
})
export class ActivityInscribePage implements OnInit {
  activity = {
    name: 'Caminar',
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
    address: 'Calle 1 #1-1'
  }
  constructor() { }

  ngOnInit() {
  }

  inscribir()
  {

  }

}
