import {Component,Input} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template:`
    <div><h1>hello</h1>
    <div  class="well hoverwell thumbnail"> 
    <h2> {{event.name}} </h2>
    <div> date:{{event.date}} </div>
    <div> price: \${{event.price}} </div>
    <div>
    <span> location:{{event.location.address}} </span>
    <span> &nbsp; </span>
    <span> {{event.location.city}},{{event.location.pincode}}</span>
</div>
</div>
</div>
   `
})
export class EventThumbnailComponent{
    @Input() event:any

}