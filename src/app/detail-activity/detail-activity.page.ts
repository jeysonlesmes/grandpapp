import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.page.html',
  styleUrls: ['./detail-activity.page.scss'],
})
export class DetailActivityPage implements OnInit {
  id = null

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
