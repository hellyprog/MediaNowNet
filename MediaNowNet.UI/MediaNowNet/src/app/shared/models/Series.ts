import { IWatchable } from '../interfaces';

export class Series implements IWatchable {
  public title: string;
  public posterUrl: string;
  public startYear: number;
  public endYear: number;
}
