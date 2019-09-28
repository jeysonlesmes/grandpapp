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

  constructor() { }

	getActivities() {
		return this.activities;
	}

	createActivity() {

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
	datetime: string;
	dateend: string;
	category: string;
	enabled: boolean;
	quantity: number;
	assistant: number;
	partner: PartnerActivity;
	place: PlaceActivity;
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