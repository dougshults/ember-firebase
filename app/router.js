import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events', {resetNamespace: true}, function() {
    this.route('new');
    this.route('edit', {path: '/edit/:event_id'});
  });

  this.route('event', function() {
    this.route('not');
  });
});

export default Router;

