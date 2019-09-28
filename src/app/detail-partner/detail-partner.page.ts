import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-partner',
  templateUrl: './detail-partner.page.html',
  styleUrls: ['./detail-partner.page.scss'],
})
export class DetailPartnerPage implements OnInit {
	activity = null;

  constructor(private activatedRoute: ActivatedRoute) {
		
	 }

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
        name: 'Carlos Pérez',
        image: './assets/images/partner-1.jpeg'
      },
      images: [
        './assets/images/lugar-ajedrez.jpeg',
        './assets/images/lugar-ajedrez.jpg',
      ],
      address: 'Carrera 7 #166-15',
      inscribed: [
        {
          name: 'José García',
          description: 'Caminar, Ajedrez, Cocinar',
          image: './assets/images/grandpa-2.jpg'
        },
        {
          name: 'Miguel Tellez',
          description: 'Ajedrez, Cocinar, Cantar',
          image: './assets/images/grandpa-3.jpg'
        },
        {
          name: 'Luis Ramírez',
          description: 'Cocinar, Ajedrez',
          image: './assets/images/grandpa-4.jpg'
        }
      ]
    }
  }

}
