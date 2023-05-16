import { GameOverException } from '../../src/Shared/exceptions';
import { Writer, writer } from '../../src/Writers/Writer';

describe('Writer:', () => {
  const writer = new Writer('odev', 1);

  const noLives = new GameOverException('lives');

  test('deberia lanzar una excepcion cuando las vidas se acaban', () => {
    try {
      writer.discountLives();
    } catch (err: any) {
      expect(err.name).toBe(noLives.name);
    }
  });

  test('writer deberia crearse por defecto con 3 vidas y name: Guest', () => {
    expect(new Writer().details()).toStrictEqual({ nickname: 'Guest', lives: 3 });
  });
});
