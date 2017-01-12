define('ember-starter/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-starter/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberStarterConfigEnvironment) {
  var _config$APP = _emberStarterConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});