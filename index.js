/**
 * Set BDD proxies.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set('proxies', 'describe', 'addSuite');
  hydro.set('proxies', 'context', 'addSuite');
  hydro.set('proxies', 'when', 'addSuite');
  hydro.set('proxies', 'it', 'addTest');
};
