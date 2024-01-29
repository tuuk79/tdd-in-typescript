describe('practice', () => {
  it('do something', () => {
    const counters = {
      1: 0,
      2: 0,
      3: 1,
      4: 2,
      5: 0,
    };

    const values = Object.values(counters);
    const highest = Math.max(...values);

    const updated = values.map(() => highest);
    console.log('updated', updated);
  });
});
