import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '../../node_modules/angularfire2/firestore';
import { Observable } from '../../node_modules/rxjs';

export interface Room{
  roomNumber : number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'angularfire';
  roomsCollection : AngularFirestoreCollection<Room>;
  rooms:Observable<Room[]>;
  constructor(private db : AngularFirestore) {
    
  }

  ngOnInit(){
   this.roomsCollection = this.db.collection('Rooms');
   this.rooms = this.roomsCollection.valueChanges(); 
  }
}
