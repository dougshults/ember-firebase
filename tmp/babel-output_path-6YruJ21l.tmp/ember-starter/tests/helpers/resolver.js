define('ember-starter/tests/helpers/resolver', ['exports', 'ember-starter/resolver', 'ember-starter/config/environment'], function (exports, _emberStarterResolver, _emberStarterConfigEnvironment) {

  var resolver = _emberStarterResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberStarterConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberStarterConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});