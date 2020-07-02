import {Component} from '@angular/core'

@Component({
    selector:'events-list',
    template: `
    <div> 
    <h1> Angular project</h1>
    <hr>
    <event-thumbnail [event] = "event1"></event-thumbnail> 
    </div>
    `
})
export class EventsListComponent{
 event1 = {
    id: 1,
    name: 'sandhya',
    date: '22/04/1998',
    price: 500.50,
    imageUrl: "/assets/images/images.jpg",
    location: {
        address: 'bedrapalli',
        city: 'hosur',
        pincode: '479274'
    }
}
    
}