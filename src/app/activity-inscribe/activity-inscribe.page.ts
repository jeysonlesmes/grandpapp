import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService, Activity } from '../../../src/app/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-inscribe',
  templateUrl: './activity-inscribe.page.html',
  styleUrls: ['./activity-inscribe.page.scss'],
})
export class ActivityInscribePage implements OnInit {
  newActivity: Activity = {
    name: 'Caminar en el parque',
    date: '28/09/2019',
    hour: '19:20',
    available: '2/3',
    stars: 2,
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

  activity: Activity = null

  constructor(private activatedRoute: ActivatedRoute, public alertController: AlertController, private router: Router, private firebase: FirebaseService) { }

  ngOnInit() {
    // this.firebase.createActivity(this.newActivity).then(() => {
    //   console.warn("ok")
    // })

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.firebase.getActivity(id).subscribe(activity => {
      this.activity = activity
    })
  }

  async inscribe() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de inscribir a: <strong>José Rodríguez</strong> a esta actividad?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Inscribir',
          cssClass: 'primary',
          handler: () => {
            this.presentAlert()
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Se ha inscrito exitósamente a la actividad',
      buttons: ['Listo']
    });

    await alert.present();

    await alert.onDidDismiss().then((res) => {
      this.router.navigate(['/mentor/tab2'])
    })
  }

}
