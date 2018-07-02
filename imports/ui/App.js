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
      <header>
        <div className="units-container">
          <h1>Meteor SSR Blog Tutorial ({from})</h1>
          <nav className="navbar">
            <ul>
              <li><a href="" title="Archives">Archives</a></li>
              <li><a href="" title="Categories">Categories</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }

  _renderMain (blog, categories) {
    if (blog) {
      return (
        <main className="units-container units-row">
          <article className="unit-66">
            <h2>{blog.title}</h2>
            <figure>
              <img src={blog.blogImage} alt={blog.title} />
            </figure>
            <p><strong>{blog.introText}</strong></p>
            <a href={`/blog/${blog.slug}}`} className="btn btn-blue"></a>
          </article>
          <aside className="unit-33">

          </aside>
        </main>
      );
    }
  }

}
