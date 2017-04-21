import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('routequery');
  this.route('routetest');
  this.route('about');
  this.route('contact');
  this.route('rentals');
});

export default Router;
