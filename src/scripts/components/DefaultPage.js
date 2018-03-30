import React from 'react';
import renderHTML from 'react-render-html';

import DataStore from '../flux/stores/DataStore.js'

export class DefaultPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: {},
      acf: {},
      loaded: false
    };
  }

  componentDidMount() {

    // let allData = DataStore.getAll();
    // console.log(allData); 

    let page = DataStore.getPageBySlug(this.props.pageSlug);
    let acf = page.acf;

    this.setState({ 
      page : page,
      loaded: true
    });

  }

  render() {

    // let page = DataStore.getPageBySlug(this.props.pageSlug);

    console.log('this.state.page', this.state.page);

    if (this.state.loaded) {

      const {title, link, content, acf} = this.state.page;

      return (

        <div className="page-container">
          <h1>{title.rendered}</h1>
          { renderHTML(content.rendered) }

          <h2>Careers</h2>
          
          <h3>{acf.career}</h3>
          <p>{acf.career_description}</p>

        </div>

      );
    } else {
      return <h1>Loading</h1>
    }

    
  }
}