import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-partner',
  templateUrl: './activity-partner.page.html',
  styleUrls: ['./activity-partner.page.scss'],
})
export class ActivityPartnerPage implements OnInit {

	activity = {
    name: 'Caminar en el parque',
    date: '28/09/2019',
    hour: '19:20',
    available: '2/3',
    stars: 2,
    id: 1,
    image: './assets/images/ancianos-caminando.png',
    description: `Caminar es uno de los principales pasos de la locomoción entre los animales con patas. Caminar es típicamente más lento que correr y otros modos de andar. Caminar se define por una marcha de "péndulo invertido" en la que el cuerpo salta sobre la extremidad rígida o las extremidades con cada paso`,
    partner: {
      name: 'Carlos Pérez',
      image: './assets/images/partner-1.jpeg'
    },
    images: [
      './assets/images/caminata-1.jpg',
      './assets/images/caminata-2.jpg',
    ],
    address: 'Calle 140 #30-40'
  }

  constructor() { }

  ngOnInit() {
  }

}
