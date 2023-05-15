import { GameOverException } from '@/Shared/exceptions';
import { Word, word } from './Word';

export type mission = {
  name: string;
  description: string;
  time: number;
  word: word;
};

export class Mission {
  private name: string;
  private description: string;
  private time: number;
  private word: Word;

  public constructor(name: string, description: string, time: number, word: Word) {
    this.name = name;
    this.description = description;
    this.time = time;
    this.word = word;
  }

  //create estatico.

  public discountTime(): void {
    this.time = this.time - 1;

    if (this.time <= 0) {
      throw new GameOverException('time');
    }
  }

  public details(): mission {
    return {
      name: this.name,
      description: this.description,
      time: this.time,
      word: this.word.details(),
    };
  }
}
