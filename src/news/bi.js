import React, { Component } from "react";
import style from "./newsapi.module.css";
import { Spinner } from 'reactstrap';
import '../pages/index.css';

const apikey = "7aeb97081f4140d6a65697a01b4c8d95";

const news = items =>
  `https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=${apikey}
`;

const News = props => (
  <a className={style.newsholder} href={props.url}>
    <div>
      <img src={props.image} className={style.img} />
    </div>
    <div className={style.text}>
      <div className={style.title}>
        {props.title}
      </div>
      <div className={style.description}>{props.description}</div>
    </div>
  </a>
);

class BI extends Component {
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
    if (!this.state.data) return <div className={style.spinner}><Spinner color="primary" /></div>;
    return (
      <div>
        <h3>BI</h3>
        <div>
          {this.state.data.articles.slice(0, 6).map(x => (
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

export default BI;
