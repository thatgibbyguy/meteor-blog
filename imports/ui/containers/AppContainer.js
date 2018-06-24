import { Meteor } from 'meteor/meteor';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Blog , Categories } from '/lib/collections.js';

import App from '/imports/ui/App.js';

export default AppContainer = withTracker (() => {
  const blogHandle = Meteor.isClient ? Meteor.subscribe('blog') : {ready: () => true };
  const categoryHandle = Meteor.isClient ? Meteor.subscribe('categories') : {ready: () => true};
  const blogs = Blog.findOne();
  const categories = Categories.findOne();

  return {
    blogs,
    categories,
  }

})(App);
