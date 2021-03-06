
/**
 * @fileoverview The public api of seajs.
 */

(function(host, data, fn, global) {

  // Avoids conflicting when sea.js is loaded multi times.
  if (host._seajs) {
    global.seajs = host._seajs;
    return;
  }

  // SeaJS Loader API:
  host.config = fn.config;
  host.use = fn.use;

  // Module Authoring API:
  var previousDefine = global.define;
  global.define = fn.define;


  // For custom loader name.
  host.noConflict = function(all) {
    global.seajs = host._seajs;
    if (all) {
      global.define = previousDefine;
      host.define = fn.define;
    }
    return host;
  };


  // Keeps clean!
  if (!data.config.debug) {
    delete host._util;
    delete host._data;
    delete host._fn;
    delete host._seajs;
  }

})(seajs, seajs._data, seajs._fn, this);
