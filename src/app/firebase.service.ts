import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

	private activityCollection: AngularFirestoreCollection<Activity>;
  private activities: Observable<Activity[]>;

	private mentorCollection: AngularFirestoreCollection<Mentor>;
  private mentors: Observable<Activity[]>;

	private grandParentCollection: AngularFirestoreCollection<GrandParent>;
  private grandParents: Observable<GrandParent[]>;

  constructor(db: AngularFirestore) {
	this.activityCollection = db.collection<Activity>('activities')

	this.activities = this.activityCollection.snapshotChanges().pipe(
		map(actions => {
		  return actions.map(a => {
			const data = a.payload.doc.data();
			const id = a.payload.doc.id;
			return { id, ...data };
		  });
		})
	  );
  }

	getActivities() {
		return this.activities;
	}

	createActivity(activity: Activity) {
		return this.activityCollection.add(activity)
	}

	updateAtivity() {

	}

	//----

	createMentor() {

	}

	createGrandPa() {

	}


	createPartner() {

	}

	//---
	subscribeEvent() {

	}

	getEvents(id) {
		return this.mentorCollection.doc(id).valueChanges();
	}

}

export interface Activity {
	id?: string;
	name: string;
	description: string;
	date: string;
	hour: string;
	partner: PartnerActivity;
	available: string;
	stars: number;
	image: string;
	images: Array;
    address: String;
}

export interface PlaceActivity {
	address: string;
	latitud: string;
	longuitud: string;
	name: string;
}

export interface PartnerActivity {
	id?: string;
	name: string;
	image: string;
}

export interface GrandParent {
	age: string;
	description: string;
	name: string;
	photo?: string;
	health: string[];
	interestings: Interest;
	location: PlaceActivity;
}

export interface Interest {
	category: string;
	name: string;
}

export interface Mentor {
	name: string;
	email: string;
	photo?: string;
	grandparents: GrandParent[];
	
}