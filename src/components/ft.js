import React, { Component } from "react";
import style from "./newsapi.module.css";

const apikey = "7aeb97081f4140d6a65697a01b4c8d95";

const news = items =>
  `https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=${apikey}
`;

const News = props => (
  <a className={style.newsholder} href={props.url}>
    <div>
      <img src={props.image} className={style.img} />
    </div>
    <div className={style.text}>
      <div className={style.none}>
        <b>{props.title}</b>
      </div>
      <div>{props.description}</div>
    </div>
  </a>
);

class FT extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(news(this.props))
      .then(d => d.json())
      .then(d => {
        this.setState({
          data: d
        });
      });
  }

  render() {
    if (!this.state.data) return <p>...</p>;
    return (
      <div>
        <h3>FT</h3>
        <div>
          {this.state.data.articles.slice(0, 4).map(x => (
            <News
              image={x.urlToImage}
              title={x.title}
              description={x.description}
              url={x.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FT;
