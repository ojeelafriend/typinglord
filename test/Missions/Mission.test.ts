import { Mission } from '../../src/Missions/Mission';
import { GameOverException } from '../../src/Shared/exceptions';
import { defaultMission } from '../../src/Missions/config';

describe('Mission:', () => {
  const mission = new Mission('Mordor', 1, ['Hello', 'World']);

  const noTime = new GameOverException('time');

  test('deberia lanzar GameOverExcepcion de tipo time', () => {
    try {
      mission.discountTime();
    } catch (error: any) {
      expect(error.name).toBe(noTime.name);
    }
  });

  test('deberia crearse la entidad mission por defecto', () => {
    const { name, time, text } = new Mission().details();

    const { words } = text;

    const values = {
      name: name,
      text: words,
      time: time,
    };

    expect(values).toStrictEqual(defaultMission);
  });
});
