define('ember-starter/app', ['exports', 'ember', 'ember-starter/resolver', 'ember-load-initializers', 'ember-starter/config/environment'], function (exports, _ember, _emberStarterResolver, _emberLoadInitializers, _emberStarterConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberStarterConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberStarterConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberStarterResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberStarterConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});