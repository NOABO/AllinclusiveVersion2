import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
customers : any=[{name:'bassoum',message:'my team im really proud of you ❤️'}]  // = the data that we need(e.g of model of feed)
 comment = "";
 postComment = [];
 post(){
   this.postComment.push(this.comment);
   this.comment = "";
 }
constructor() { }

  ngOnInit(): void {
  }

}
