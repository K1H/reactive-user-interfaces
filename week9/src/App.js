import React, { Component } from 'react';
import './App.css';

const API_URL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2663a6d57fc14ea28fb2c6aa07827f5d";

class App extends Component {

constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      articles: []
    }
}

componentDidMount(){
  fetch(API_URL)
    .then(response => {
        return response.json();
      })
    .then(data =>
      this.setState({
        isLoading: false,
        articles: data.response.docs
      })
      )
}

  render()
  {
    if(this.state.isLoading){
      return (
        <div className="App">
        <p>Loading...</p>
        </div>
      );
    }
    else {

  const article = this.state.articles[0];

      return (
        <div className="App">
        <h1>{article.headline.main}</h1>
        <p>{article.snippet}</p>
        <a href={article.web_url}>Go to article</a>
      </div>
      );
    }

  }

}

export default App;
