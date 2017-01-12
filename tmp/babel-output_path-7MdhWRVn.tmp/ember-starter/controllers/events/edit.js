define('ember-starter/controllers/events/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      editEvent: function editEvent(id) {
        var title = this.get('model.title');
        var description = this.get('model.description');
        var date = this.get('model.date');

        // Update tasks
        this.store.findRecord('event', id).then(function (event) {
          var self = this;
          event.set('title', title);
          event.set('description', description);
          event.set('date', new Date(date));

          // Save to Database
          event.save();

          self.transitionToRoute('events');
        });
      }
    }

  });
});