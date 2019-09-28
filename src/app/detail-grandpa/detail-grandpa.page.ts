import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-grandpa',
  templateUrl: './detail-grandpa.page.html',
  styleUrls: ['./detail-grandpa.page.scss'],
})
export class DetailGrandpaPage implements OnInit {
  grandpa: any = {
    image: './assets/images/grandpa-1.jpg',
    name: 'José Rodríguez',
    description: 'Le gusta caminar, es un buen conversador y persona. Retirado del ejército'
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
