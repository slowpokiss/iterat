import Team from '../src/index';

test('test for iterator1', () => {
  const tm = new Team();
  const data = tm.iter();
  const result = data.next();
  const expected = {
    value: {
      name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
    },
    done: false,
  };
  expect(result).toStrictEqual(expected);
});

test('test for iterator2', () => {
  const tm = new Team();
  const data = tm.iter();
  data.next();
  data.next();
  data.next();
  const result = data.next();
  const expected = { value: undefined, done: true };
  expect(result).toStrictEqual(expected);
});
