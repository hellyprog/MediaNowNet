import { Season } from './Season';
import { VoteStatus } from '../enums/VoteStatus';

export class Series {
  public description: string;
  public downvoter: number;
  public id: number;
  public posterUrl: string;
  public rating: number;
  public seasons: Season[];
  public title: string;
  public upvotes: number;
  public voteStatus: VoteStatus;
}
