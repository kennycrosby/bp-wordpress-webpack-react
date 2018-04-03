import React from "react";

import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  NavLink 
} from "react-router-dom";

// Pages
import { Stories }       from './components/Stories';
import { DefaultPage }   from './components/DefaultPage';
import { PostDetail }    from './components/PostDetail';

import { Header }        from './components/Header';
import { Footer }        from './components/Footer';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Work = () => (
  <div>
    <h2>Work</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Careers = () => (
  <div>
    <h2>Careers</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);


const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export class AppRouter extends React.Component {   

  constructor(props) {
    super(props);

  }

  buildPageRoutes(){

    const data = this.props.data;

    return data.pages.map((page, i) => {
      return(
        <Route
            key={i}
            // component={ DefaultPage }
            path={`/${page.slug}`}
            render={routeProps => <DefaultPage pageSlug={page.slug}/>}
            exact
        /> 
      )
    })
  }

  render() {
    return (
      <Router>
        <div>

          <Header />

          <Switch>

            <Route path="/stories/:slug" component={PostDetail} />

            <Route exact path="/" render={routeProps => <Home pageSlug="home" />} />
            <Route path="/about" render={routeProps => <About pageSlug="about" />} />
            <Route path="/work" render={routeProps => <Work pageSlug="work" />} />
            <Route path="/careers" render={routeProps => <Careers pageSlug="careers" />} />
            <Route path="/stories" render={routeProps => <Stories pageSlug="stories" />} />
            <Route path="/contact" render={routeProps => <Contact pageSlug="contact" />} />

            {this.buildPageRoutes()}

            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router>
    );
  }
}
