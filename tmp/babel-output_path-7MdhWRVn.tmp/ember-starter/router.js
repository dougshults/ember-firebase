define('ember-starter/router', ['exports', 'ember', 'ember-starter/config/environment'], function (exports, _ember, _emberStarterConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberStarterConfigEnvironment['default'].locationType,
    rootURL: _emberStarterConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('events', { resetNamespace: true }, function () {
      this.route('new');
      this.route('edit', { path: '/edit/:event_id' });
    });

    this.route('event', function () {
      this.route('not');
    });
  });

  exports['default'] = Router;
});