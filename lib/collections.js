import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';

// collections defined as:
// CollectionName = new Mongo.Collection('collectionname');

const Schemas = {};

//----------------------------
//******** Blog Schema
//----------------------------

export const Blog = new Mongo.Collection('blog');

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
    type: Array,
    label: "Categories",
    optional: true,
    blackbox: true
  },
  'categories.$': { type: String },
});

Blog.publicFields = {
  title: 1,
  slug: 1,
  introText: 1,
  blogImage: 1,
  dataPosted: 1,
  content: 1,
  categories: 1,
}

Blog.attachSchema(Schemas.blogSchema);

//----------------------------
//******** Categories Schema
//----------------------------

export const Categories = new Mongo.Collection('categories');

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

Categories.publicFields = {
  category: 1,
  slug: 1,
}

Categories.attachSchema(Schemas.categorySchema);
