import React from 'react';
import renderHTML from 'react-render-html';

import DataStore from '../flux/stores/DataStore.js'

export class Stories extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loaded: false
    };
  }

  componentDidMount() {

    let posts = DataStore.getAllPosts();

    this.setState({ 
      posts : posts,
      loaded: true
    });

  }

  render() {

    if (this.state.loaded) {

      const postList = this.state.posts.map(post => {

        console.log(post);
          
        return (
          <div key={post.id}>
            <h1>{post.title.rendered}</h1>
            {renderHTML(post.content.rendered)}

          </div>
        )
      });

      console.log('postList', postList);

      return (

        <div className="posts-container">
          <h1>Stories</h1>
          {postList}
        </div>
      );

    } else {
      return <h1>Loading</h1>
    }
  }
}
