import { GameOverException } from '@/Shared/exceptions';

export type writer = {
  nickname: string;
  lives: number;
};

export class Writer {
  private nickname: string;
  private lives: number;

  public constructor(nickname: string = 'Guest', lives: number = 3) {
    this.nickname = nickname;
    this.lives = lives;
  }

  public discountLives(): void {
    this.lives--;

    if (this.lives <= 0) {
      throw new GameOverException('lives');
    }
  }

  public boost(value: number): void {
    this.lives = this.lives + value;
  }

  public details(): writer {
    return {
      nickname: this.nickname,
      lives: this.lives,
    };
  }
}
