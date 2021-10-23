it('async test 1', (done) => {
  setTimeout(done, 100);
});

it('async test 2', () => new Promise((resolve) => setTimeout(resolve, 100)));

// eslint-disable-next-line no-return-await
it('async test 3', async () => await delay(100));
