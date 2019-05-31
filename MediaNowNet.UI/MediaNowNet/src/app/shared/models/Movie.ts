import { IWatchable } from '../interfaces';

export class Movie implements IWatchable {
  public id: number;
  public title: string;
  public posterUrl: string;
  public year: number;
}
