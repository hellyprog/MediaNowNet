import { Component, OnInit, Input } from '@angular/core';
import { VoteStatus } from 'src/app/shared/enums';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() upvotes: number;
  @Input() downvotes: number;
  @Input() voteStatus: VoteStatus;

  totalVotes: number;
  hasUserUpvoted: boolean;
  hasUserDownvoted: boolean;

  constructor() { }

  ngOnInit() {
    this.totalVotes = +this.upvotes + +this.downvotes;
    this.hasUserUpvoted = this.voteStatus === VoteStatus.Upvoted;
    this.hasUserDownvoted = this.voteStatus === VoteStatus.Downvoted;
  }

  upvote() {
    this.hasUserUpvoted = true;
    this.hasUserDownvoted = false;

    if (+this.voteStatus === VoteStatus.None) {
      this.upvotes++;
      this.voteStatus = VoteStatus.Upvoted;
    } else if (+this.voteStatus === VoteStatus.Downvoted) {
      this.downvotes--;
      this.upvotes++;
      this.voteStatus = VoteStatus.Upvoted;
    } else if (+this.voteStatus === VoteStatus.Upvoted) {
      this.upvotes--;
      this.voteStatus = VoteStatus.None;
      this.hasUserUpvoted = false;
    }

    // call BE
  }

  downvote() {
    this.hasUserDownvoted = true;
    this.hasUserUpvoted = false;

    if (+this.voteStatus === VoteStatus.None) {
      this.downvotes++;
      this.voteStatus = VoteStatus.Downvoted;
    } else if (+this.voteStatus === VoteStatus.Downvoted) {
      this.downvotes--;
      this.voteStatus = VoteStatus.None;
      this.hasUserDownvoted = false;
    } else if (+this.voteStatus === VoteStatus.Upvoted) {
      this.upvotes--;
      this.downvotes++;
      this.voteStatus = VoteStatus.Downvoted;
    }
  }

  // call BE
}
