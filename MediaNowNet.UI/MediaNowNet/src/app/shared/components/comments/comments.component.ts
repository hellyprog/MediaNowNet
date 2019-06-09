import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/Comment';
import * as moment from 'moment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() id: number;
  comments: Comment[];

  constructor() { }

  ngOnInit() {
    const { id } = this;

    if (id) {
      this.comments = this.getVideoComments(id);
    }
  }

  getVideoComments(id: number) {
    const comment = new Comment();
    comment.author = 'John Travolta';
    comment.date = moment().toDate();
    comment.displayDate = moment(comment.date).format('MMMM Do YYYY, h:mm:ss a');
    comment.text = 'Awesome movie';

    return [comment, comment];
  }
}
