describe('foo', function() {
  context('works', function() {
    when('for real', function() {
      it('bar', function() {
        var suites = __hydro.suites();
        assert(suites.length === 4, 'bad length: ' + suites.length);
        assert(suites[3].tests.length === 1);
      });
    });
  });
});
