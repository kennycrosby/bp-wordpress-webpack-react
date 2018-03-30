import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

// Import styles, this import is needed for webpack
import '../styles/main.scss';

import DataActions from './flux/actions/DataActions';

// Pages
import { Stories }       from './components/Stories';
import { DefaultPage }   from './components/DefaultPage';
import { Header }        from './components/Header';

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

class AppInitializer {

  buildRoutes(data){
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

  buildLinks(data) {
    
    return data.pages.map((page, i) => {

      console.log(page);

      return(
        <li key={i}>
          <Link to={`/${page.slug}`}>{page.title.rendered}</Link>
        </li>
      )
    })
  }

  run() {
      DataActions.getPages((response)=>{
          ReactDOM.render(
            <Router>
              <div>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/work">Work</NavLink>
                  </li>
                  <li>
                    <NavLink to="/careers">Careers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/stories">Stories</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  {this.buildLinks(response)}
                </ul>

                <Header />

                <Switch>

                  <Route exact path="/" render={routeProps => <Home pageSlug="home" />} />
                  <Route path="/about" render={routeProps => <About pageSlug="about" />} />
                  <Route path="/work" render={routeProps => <Work pageSlug="work" />} />
                  <Route path="/careers" render={routeProps => <Careers pageSlug="careers" />} />
                  <Route path="/stories" render={routeProps => <Stories pageSlug="stories" />} />
                  <Route path="/contact" render={routeProps => <Contact pageSlug="contact" />} />

                  {this.buildRoutes(response)}

                  <Route component={NoMatch} />
                </Switch>

              </div>
            </Router>
              , document.getElementById('main')
          );
      });
  }
}

new AppInitializer().run();


// ReactDOM.render(
//   <AppRouter />,
//   document.getElementById('main')
// );