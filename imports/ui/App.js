import React, { Component } from 'react';

export default class App extends Component {

  render () {
    const {from, blog, categories} = this.props;
    return (
      <div className="app-container">
        {this._renderHeader(from)}
        {this._renderMain(blog, categories)}
      </div>
    );
  }

  _renderHeader (from) {
    return (
      <header className="site-header">
        <h1>Meteor SSR Blog Tutorial ({from})</h1>
        <nav className="navbar">
          <ul>
            <li><a href="" title="Archives">Archives</a></li>
            <li><a href="" title="Categories">Categories</a></li>
          </ul>
        </nav>
      </header>
    )
  }

  _renderMain (blog, categories) {
    if (blog && categories) {
      return (
        <main>
          <div className="units-row split">
            <article className="unit-auto">
              <div className="entry-holder">
                <a href={`/blog/${blog.slug}`} className="landing-blog-snippet">
                  <h2>{blog.title}</h2>
                  <figure>
                    <img src={blog.blogImage} alt={blog.title} />
                  </figure>
                  <p><strong>{blog.introText}</strong></p>
                </a>
                <a href={`/blog/${blog.slug}}`} className="btn btn-blue">Read More</a>

                <div className="landing-blog-categories">
                  <h4>This Post Covers: </h4>
                  <div className="btn-group width-100">
                    {this._renderCategories(categories)}
                  </div>
                </div>
              </div>
            </article>
            <div className="unit-auto">
              <aside className="site-sidebar">
                <h3>View Other Posts</h3>
              </aside>
            </div>
          </div>
        </main>
      );
    }
  }

  _renderCategories (categories) {
    if (categories) {
      const formattedCategories = categories.map((cat, ii) => {
        return (
          <a href={`/blog/categories/${cat.slug}`}
             className="btn btn-outline btn-black"
             key={ii}>{cat.category}</a>
        )
      });

      return formattedCategories;
    }
  }

}
