define('ember-starter/controllers/events', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      deleteEvent: function deleteEvent(id) {
        this.store.findRecord('event', id).then(function (event) {
          event.deleteRecord();

          event.save();
        });
      }
    }
  });
});