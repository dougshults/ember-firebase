define('ember-starter/helpers/app-version', ['exports', 'ember', 'ember-starter/config/environment'], function (exports, _ember, _emberStarterConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _emberStarterConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});