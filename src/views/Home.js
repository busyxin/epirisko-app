import React, { Component } from 'react';

class Home extends Component {

  render() {
    const articles = this.props.articles;

    if(articles !== undefined) {
      return (
        <div className="Home">
          <h2>Found articles</h2>
          {
            articles.map((article, index) => {
              console.log(article.title);
              return (
                <h3>{article.title}</h3>
              );
            })
          }
        </div>
      );
    }
    else {
      return (
        <div className="Home">
          <h2>My articles</h2>
        </div>
      );
    }
  }
}

export default Home;