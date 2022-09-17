import Team from '../app';

test('add', () => {
  const team = new Team();
  team.add('undead');
  team.add('zombie');
  expect([...team.members]).toEqual(['undead', 'zombie']);
});

test('addAll', () => {
  const team = new Team();
  team.addAll('undead', 'zombie', 'daemon');
  expect(team.toArray()).toEqual(['undead', 'zombie', 'daemon']);
});

test('toArray', () => {
  const team = new Team();
  team.add('undead');
  team.add('zombie');
  expect(team.toArray()).toEqual(['undead', 'zombie']);
});

test('Error', () => {
  const team = new Team();
  team.add('undead');
  team.add('zombie');
  expect(() => {
    team.add('undead');
  }).toThrowError('Персонаж уже существует в команде');
});
