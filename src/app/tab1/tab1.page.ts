import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  grandpas: Array<any> = []

  constructor() {}

  ngOnInit()
  {
    this.grandpas.push({
      id: 1,
      name: 'Nombre',
      description: 'Descripción',
      image: 'https://d286ib5nnf9jej.cloudfront.net/wp-content/uploads/2017/01/the-smartcane-baston-inteligente-mediatrends-3-1-750x500.jpg'
    })
    this.grandpas.push({
      id: 2,
      name: 'Nombre',
      description: 'Descripción',
      image: 'https://d286ib5nnf9jej.cloudfront.net/wp-content/uploads/2017/01/the-smartcane-baston-inteligente-mediatrends-3-1-750x500.jpg'
    })
    this.grandpas.push({
      id: 3,
      name: 'Nombre',
      description: 'Descripción',
      image: 'https://d286ib5nnf9jej.cloudfront.net/wp-content/uploads/2017/01/the-smartcane-baston-inteligente-mediatrends-3-1-750x500.jpg'
    })
  }

}
