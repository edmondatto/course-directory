import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

// App Components
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";
import Header from "./Header";


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => (<About title="What we're all about"/>)} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;