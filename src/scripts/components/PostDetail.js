import React from 'react';
import renderHTML from 'react-render-html';

import { Link } from 'react-router-dom';

import DataStore from '../flux/stores/DataStore.js'

export class PostDetail extends React.Component {

  constructor(props) {
    super(props);

    console.log('this.props.slug', this.props.match.params.slug)

    const slug = this.props.match.params.slug;

    this.state = {
      slug: slug,
      post: {},
      loaded: false
    };
  }

  componentDidMount() {

    let post = DataStore.getPostBySlug(this.state.slug);

    console.log('post', post);

    this.setState({ 
      post : post,
      loaded: true
    });

  }

  render() {

    if (this.state.loaded) {

      const {title, link, content, acf} = this.state.post;

      return (

        <div className="posts-container">
          <h1>Post Detail - {title.rendered}</h1>

          {renderHTML(content.rendered)}

          <Link to="/stories">&lsaquo; Back</Link> 

        </div>
      );

    } else {
      return <h1>Loading</h1>
    }
  }
}
