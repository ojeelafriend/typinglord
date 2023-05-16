import { GameOverException } from '@/Shared/exceptions';
import { Text, text } from './Text';

export type mission = {
  name: string;
  time: number;
  text: text;
};

export class Mission {
  private name: string;
  private time: number;
  private Text: Text;

  public constructor(name: string, time: number, words: string[]) {
    this.name = name;
    this.time = time;

    this.Text = new Text(words);
  }

  public discountTime(): void {
    this.time = this.time - 1;

    if (this.time <= 0) {
      throw new GameOverException('time');
    }
  }

  public details(): mission {
    return {
      name: this.name,
      time: this.time,
      text: this.Text.details(),
    };
  }
}
