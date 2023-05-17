import { Text } from '../../src/Missions/Text';

describe('Text: ', () => {
  const text = new Text(['apply', 'job']);

  test('deberia retornar false si la palabra es incorrecta', () => {
    expect(text.compare('aply')).toBe(false);
  });

  test('deberia retornar true si la palabra es correcta', () => {
    expect(text.compare('apply')).toBe(true);
  });

  test('deberia pasar de palabra si la palabra fue correcta', () => {
    const _ = new Text(['apply', 'job']);

    const firstWord = _.details().current;

    _.compare('apply'); // cambia el indice.
    _.next();

    expect(_.details().current).not.toBe(firstWord);
  });
});
