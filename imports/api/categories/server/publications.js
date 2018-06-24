import { Meteor } from 'meteor/meteor';
import { Categories } from '/lib/collections.js';

Meteor.publish('categories', () => {
  return Categories.find({
    fields: Categories.publicFields
  });
});
