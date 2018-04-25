import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header   from './components/Header';
import Home     from './views/Home';
import Search   from './views/Search';
import Article  from './views/Article';
import './stylesheets/App.css';

import createIEEEAPI from './lib/ieeeAPI';
const iEEEAPI = createIEEEAPI(fetch);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      articles: undefined
    };
  }

  handleSearchSubmit = (query) => {
    iEEEAPI.fetchArticles(query)
    .then(result => {
      this.setState({
        articles: result
      })
    })
    .catch(alert)
  }

  renderHome = (props) => {
    return (
      <Home 
        articles={this.state.articles}
        {...props} 
      />
    );
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-container">
            <Header link={Link} handleSubmit={this.handleSearchSubmit}/>
            <main>
              <Route exact path="/" render={this.renderHome} />
              <Route path="/search" component={Search} />
              <Route path="/article/:id" component={Article} />
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
