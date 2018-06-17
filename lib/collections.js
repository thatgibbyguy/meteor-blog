// collections defined as:
// CollectionName = new Mongo.Collection('collectionname');

const Schemas = {};

//----------------------------
//******** Blog Schema
//----------------------------

Blog = new Mongo.Collection('blog');

Schemas.blogSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200,
    optional: false
  },
  slug: {
    type: String,
    label: "the blogs url slug",
    max: 200,
    optional: false
  },
  introText: {
    type: String,
    label: "Intro Text",
    optional: false
  },
  blogImage:{
    type: String,
    label: "Blog Image",
    optional: false
  },
  datePosted: {
    type: Date,
    label: "Date Posted",
    optional: false
  },
  content: {
    type: String,
    label: "Content",
    optional: false
  },
  categories: {
    type: [String],
    label: "Categories",
    optional: true,
    blackbox: true
  },
});

Blog.attachSchema(Schemas.blogSchema);

//----------------------------
//******** Categories Schema
//----------------------------

Categories = new Mongo.Collection('categories');

Schemas.categorySchema = new SimpleSchema({
	category:{
    type: String,
    label: 'Category',
    max: 180,
    optional: false
	},
  slug:{
    type: String,
    label: 'Category',
    max: 200,
    optional: false
	},
});

Categories.attachSchema(Schemas.categorySchema);
