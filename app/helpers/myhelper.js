import Ember from 'ember';

export function myhelper([p]) {
  return p+" I";
}

export default Ember.Helper.helper(myhelper);
