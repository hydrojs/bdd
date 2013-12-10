/**
 * Set BDD proxies.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set('proxies', 'describe', 'addSuite');
  hydro.set('proxies', 'it', 'addTest');
};
