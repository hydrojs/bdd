/**
 * Set BDD proxies.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set('proxies', 'describe', 'addSuite');
  hydro.set('proxies', 'it', 'addTest');
}

/**
 * Plugin title.
 */

module.exports.title = 'hydro-bdd';

/**
 * Plugin description.
 */

module.exports.desc = 'BDD interface (describe, it)';
