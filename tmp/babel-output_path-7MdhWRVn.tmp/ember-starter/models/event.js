define('ember-starter/models/event', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    // Data Schema
    title: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    map: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date'),
    created: _emberData['default'].attr('string', {
      defaultValue: function defaultValue() {
        return new Date();
      }
    })
  });
});