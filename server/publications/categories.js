import { Meteor } from 'meteor/meteor';
import { Categories } from '/imports/api/collections.js';

Meteor.publish('categories', () => {
  return Categories.find({}, {
    fields: Categories.publicFields
  });
});
