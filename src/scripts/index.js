import React from 'react';
import ReactDOM from 'react-dom';

// Import styles, this import is needed for webpack
import '../styles/main.scss';

import DataActions from './flux/actions/DataActions';

import { AppRouter } from './AppRouter';

class AppInitializer {

  run() {
    DataActions.getPages((response)=>{
      ReactDOM.render(
        <AppRouter data={response} />
          , document.getElementById('app')
      );
    });
  }
}

new AppInitializer().run();

// class AppInitializer {

//   buildPageRoutes(data){
//     return data.pages.map((page, i) => {
//       return(
//         <Route
//             key={i}
//             // component={ DefaultPage }
//             path={`/${page.slug}`}
//             render={routeProps => <DefaultPage pageSlug={page.slug}/>}
//             exact
//         /> 
//       )
//     })     
//   }

//   buildLinks(data) {
    
//     return data.pages.map((page, i) => {

//       console.log(page);

//       return(
//         <li key={i}>
//           <Link to={`/${page.slug}`}>{page.title.rendered}</Link>
//         </li>
//       )
//     })
//   }

//   run() {
//       DataActions.getPages((response)=>{
//           ReactDOM.render(
//             <Router>
//               <div>
//                 <ul>
//                   <li>
//                     <NavLink to="/">Home</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/about">About</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/work">Work</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/careers">Careers</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/stories">Stories</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/contact">Contact</NavLink>
//                   </li>
//                   {this.buildLinks(response)}
//                 </ul>

//                 <Header />

//                 <Switch>

//                   <Route path="/stories/:slug" component={PostDetail} />

//                   <Route exact path="/" render={routeProps => <Home pageSlug="home" />} />
//                   <Route path="/about" render={routeProps => <About pageSlug="about" />} />
//                   <Route path="/work" render={routeProps => <Work pageSlug="work" />} />
//                   <Route path="/careers" render={routeProps => <Careers pageSlug="careers" />} />
//                   <Route path="/stories" render={routeProps => <Stories pageSlug="stories" />} />
//                   <Route path="/contact" render={routeProps => <Contact pageSlug="contact" />} />



//                   {this.buildPageRoutes(response)}

//                   <Route component={NoMatch} />
//                 </Switch>

//               </div>
//             </Router>
//               , document.getElementById('app')
//           );
//       });
//   }
// }

// ReactDOM.render(
//   <AppRouter />,
//   document.getElementById('app')
// );