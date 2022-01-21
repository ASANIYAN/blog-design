import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Heading from './Heading';
import Navbar from './Navbar';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import InRow2item1 from './InRow2item1';
import InRow2item2 from './InRow2item2';
import InRow2item3 from './InRow2item3';
import InRow3item1 from './InRow3item1';
import InRow3item2 from './InRow3item2';
import InRow3item3 from './InRow3item3';
import SimilarArticles from './SimilarArticles';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Heading />
              <Row1 />
              <Row2 />
              <Row3 />
            </Route>
            <Route path="/InRow2item1">
              <InRow2item1 />
              <SimilarArticles />
            </Route>
            <Route path="/InRow2item2">
              <InRow2item2 />
              <SimilarArticles />
            </Route>
            <Route path="/InRow2item3">
              <InRow2item3 />
              <SimilarArticles />
            </Route>
            <Route path="/InRow3item1">
              <InRow3item1 />
              <SimilarArticles />
            </Route>
            <Route path="/InRow3item2">
              <InRow3item2 />
              <SimilarArticles />
            </Route>
            <Route path="/InRow3item3">
              <InRow3item3 />
              <SimilarArticles />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
