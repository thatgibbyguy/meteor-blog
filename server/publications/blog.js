import { Meteor } from 'meteor/meteor';
import { Blog } from '/imports/api/collections.js';

Meteor.publish('blog', () => {
  return Blog.find({}, {
    fields: Blog.publicFields
  });
});
