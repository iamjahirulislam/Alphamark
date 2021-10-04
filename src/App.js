import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import CourseDetails from './components/CourseDetails/CourseDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route exact path="/blogs/:id">
            <CourseDetails></CourseDetails>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
