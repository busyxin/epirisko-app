import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header   from './components/Header';
import Home     from './views/Home';
import Search   from './views/Search';
import Article  from './views/Article';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
  }

  handleSearchSubmit = (e) => {
    alert("submitted")
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Router>
          <div className="App-container">
            <Header link={Link} handleSubmit={this.handleSearchSubmit}/>
            <main>
              <Route exact path="/" component={Home} />
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
