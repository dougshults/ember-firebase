define('ember-starter/controllers/events/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      addEvent: function addEvent() {
        var title = this.get('title');
        var description = this.get('description');
        var date = this.get('date');
        var map = this.get('map');

        // Create new task for fields
        var newEvent = this.store.createRecord('event', {
          title: title,
          description: description,
          map: map,
          date: new Date(date)
        });

        // Save to firebase
        newEvent.save();

        // Clear form
        this.setProperties({
          title: '',
          description: '',
          map: '',
          date: ''
        });
      }
    }
  });
});