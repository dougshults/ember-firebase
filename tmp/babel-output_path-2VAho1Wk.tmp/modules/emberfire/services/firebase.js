import firebase from 'firebase';
import Ember from 'ember';

var getOwner = Ember.getOwner;
var DEFAULT_NAME = '[EmberFire default app]';

export { DEFAULT_NAME };
export default {
  create: function create(application) {
    var config = getOwner(application)._lookupFactory('config:environment');
    if (!config || typeof config.firebase !== 'object') {
      throw new Error('Please set the `firebase` property in your environment config.');
    }

    var app = undefined;

    try {
      app = firebase.app(DEFAULT_NAME);
    } catch (e) {
      app = firebase.initializeApp(config.firebase, DEFAULT_NAME);
    }

    return app.database().ref();
  },

  config: null,
  isServiceFactory: true
};