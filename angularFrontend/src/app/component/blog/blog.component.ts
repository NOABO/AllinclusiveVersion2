import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';


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
 rating = 0;
 starCount = 5;
 ratingArr: boolean[] = []; // true = solid star; false = empty star

 snackBarDuration = 1000;
 response = [
   'You broke my heart!',
   'Really?',
   'We will do better next time.',
   'Glad you like it!',
   'Thank you so much!'
 ];
 
 snackBar
constructor(  snackBar: MatSnackBar) { 
   // default to no rating, i.e. all empty stars
   this.ratingArr = Array(this.starCount).fill(false);
}
post(){
  console.log(this.time)
  this.postComment.push(this.comment);
  this.comment = "";
  this.time.push(this.times);
}
numberOfLikes : number = 0;
  
likeButtonClick() {
  this.numberOfLikes++;
}

dislikeButtonClick() {
  this.numberOfLikes--;
}
  ngOnInit(): void {
   
  }

  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(i: number) {
    this.rating = i + 1;
    this.snackBar.open(this.response[i], '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar']
    });

  }

}
6
