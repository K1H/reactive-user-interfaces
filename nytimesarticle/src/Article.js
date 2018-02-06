import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <div className="Article">

          <date>{this.props.date}</date>

          <div className="text">
            <h3>{this.props.title}</h3>

                  <p>{this.props.description}</p>

                  <p className="bypeople">
                  By <span>{this.props.bypeople}</span>
                  </p>
          </div>

            <figure>
              <img src={this.props.imageUrl} />
            </figure>

      </div>
    );
  }
}

export default Article;
