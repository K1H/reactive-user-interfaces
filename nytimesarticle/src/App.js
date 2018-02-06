import React, { Component } from 'react';
import './App.css';
import Article from './Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article
          date="Feb. 2, 2018"
          title="Evil genius builds a large toy"
          description="UPDATE: The toy works"
          bypeople="Austin Powers"
          imageUrl="https://static01.nyt.com/images/2018/02/07/science/07SPACEX-promo/07SPACEX-promo-mediumThreeByTwo210.jpg"
        />

        <Article
          date="Feb. 3, 2018"
          title="‘Down and Dirty "
          description="VW Group competators announced that they will play dirty with them"
          bypeople="Conservative"
          imageUrl="https://static01.nyt.com/images/2018/02/06/business/05mlkcommercial-web/05mlkcommercial-web-mediumThreeByTwo210.jpg"
        />

        <Article
          date="Feb. 4, 2018"
          title="Modern Gang Signs"
          description="In order to be hip in today's sceen one must flash symbols in pictures to gain approval of others."
          bypeople="Liberate"
          imageUrl="https://static01.nyt.com/images/2018/02/03/sports/03pyeongchang1/03pyeongchang1-mediumThreeByTwo210.jpg"
        />
      </div>
    );
  }
}

export default App;
