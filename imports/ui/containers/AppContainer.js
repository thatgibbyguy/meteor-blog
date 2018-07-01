import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Blog , Categories } from '/imports/api/collections.js';

import App from '/imports/ui/App.js';

export default AppContainer = withTracker (() => {
  if (Meteor.isClient) {
    const blogHandle = Meteor.subscribe('blog');
    const categoryHandle = Meteor.subscribe('categories');

    if (blogHandle.ready() && categoryHandle.ready()) {
      const blog = Blog.findOne();
      const categories = Categories.find().fetch();

      return {
        blog,
        categories,
        from: 'client',
      }
    }
  }

  const blog = Blog.findOne();
  const categories = Categories.find().fetch();

  return {
    blog,
    categories,
    from: 'server',
  }

})(App);
