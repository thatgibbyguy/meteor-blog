import { Meteor } from 'meteor/meteor';
import { Blog , Categories } from '/imports/api/collections.js';

const today = new Date();

Meteor.startup(() => {
  // code to run on server at startup
  if (Blog.find().count() < 1) {
    Blog.insert({
      title: 'Test Entry',
      slug: 'test-entry',
      introText: 'Just an early test entry, will be deleted later',
      blogImage: 'https://d14jjfgstdxsoz.cloudfront.net/assets/logo.svg',
      datePosted: new Date(),
      content: 'Just some more content for our test entry. Not much to show here yet.',
      categories: ['test category'],
    });
  }

  if (Categories.find().count() < 1) {
    Categories.insert({
      category: 'test category',
      slug: 'test-category',
    });
  }
});
