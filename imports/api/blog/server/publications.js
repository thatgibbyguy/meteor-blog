import { Meteor } from 'meteor/meteor';
import { Blog } from '/lib/collections.js';

Meteor.publish('blog', () => {
  return Blog.find({
    fields: Blog.publicFields
  });
});
