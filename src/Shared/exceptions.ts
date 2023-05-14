import { TypeWithKey } from './types';

export class GameOverException extends Error {
  private fails: TypeWithKey<string> = {
    lives: 'Vidas insuficientes',
    time: 'Tiempo finalizado',
  };

  public constructor(type: string) {
    super();
    this.name = this.fails[type];
  }
}
