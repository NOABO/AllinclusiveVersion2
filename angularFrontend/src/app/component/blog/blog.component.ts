import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
customers : any=[{name:'bassoum',message:'my team im really proud of you ❤️'}]  // = the data that we need(e.g of model of feed)
 comment = "";
 times : any= moment().format('MMMM Do YYYY, h:mm:ss a');
 time : any= [];
 postComment = [];
 
 
constructor() { 
  
}
post(){
  console.log(this.time)
  this.postComment.push(this.comment);
  this.comment = "";
  this.time.push(this.times);
}
  ngOnInit(): void {
   
  }

}
