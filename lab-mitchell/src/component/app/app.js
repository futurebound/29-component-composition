import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'; //allows us to define specific routes that we want, switch to different routes without reloading the application
import Dashboard from '../dashboard/dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  //EXACT PATH CAN FUCK UP ANY NESTED ROUTES SO AVOID IF YOU'RE NOT DOING EVERYTHING TOP LEVEL
  // leaving off EXACT from PATH will be useful for dynamic routes, or user entered routes that DNE
  // WOULD NOT WANT 404 cuz everything other than home ona single page application is wrong
  // If you want to put in a Navbar, and have <link> to these routs, they need to be in the same <BrowserRouter> as the <route>'s they pointing to
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path='/' component={() => <h1>Home</h1>} />
          <Route exact path='/dashboard' component={Dashboard} />
          {/* {<Route path='/toys/:id' component={ToyThing} />
          <Route path='/*' component={fourOhFourNotFound} />} */}
        </div>
      </BrowserRouter>
    ); 
  }
};

// same as module.exports = App
export default App;