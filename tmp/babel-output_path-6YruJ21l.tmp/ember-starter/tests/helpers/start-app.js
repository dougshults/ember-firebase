define('ember-starter/tests/helpers/start-app', ['exports', 'ember', 'ember-starter/app', 'ember-starter/config/environment'], function (exports, _ember, _emberStarterApp, _emberStarterConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberStarterConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberStarterApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});