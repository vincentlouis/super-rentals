import Ember from 'ember';

export default Ember.Controller.extend({
  queryParam: Ember.computed.oneWay('query'),
  actions:{
    addQuery: function () {
      this.set('query', this.get('queryParam'));
      alert(this.get('query'));
    }
  }
});
