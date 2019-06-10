import { VoteStatus } from '../enums/VoteStatus';
export class Movie {
  public counrty: string;
  public description: string;
  public downvotes: number;
  public duration: number;
  public genre: string;
  public id: number;
  public posterUrl: string;
  public rating: number;
  public title: string;
  public upvotes: number;
  public voteStatus: VoteStatus;
  public year: number;

  constructor() {
  }
}
