// https://github.com/javascript-playground/remote-data-react-screencasts/blob/master/src/Github.js
import React, { Component } from "react";

// const urlForUsername = username => `https://api.github.com/users/mayojich`;
const header = {
    color: "white"
};

const title = {
    color: "white",
    borderRadius: "2px",
    padding: "2%",
    backgroundColor: "black",
    opacity: "0.65"
};

const newsbullets = {
    color: "white",
};

const apikey = "7aeb97081f4140d6a65697a01b4c8d95"

const news = items =>
    `https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=${apikey}

`;

class NewsAPI extends Component {
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
        if (!this.state.data) return <p style={title}>Loading News...</p>;
        return (
            <div>
                <div>
                    <div style={title}>
                        <h3 style={header}>CNBC News</h3>
                        <ul style={{ textAlign: "left" }}>
                            <li>
                                <a
                                    style={newsbullets}
                                    href={this.state.data.articles[0].url}
                                    target="_blank"
                                >
                                    {this.state.data.articles[0].title}
                                </a>
                            </li>
                            <li>
                                <a
                                    style={newsbullets}
                                    href={this.state.data.articles[1].url}
                                    target="_blank"
                                >
                                    {this.state.data.articles[1].title}
                                </a>
                            </li>
                            <li>
                                <a
                                    style={newsbullets}
                                    href={this.state.data.articles[2].url}
                                    target="_blank"
                                >
                                    {this.state.data.articles[2].title}
                                </a>
                            </li>
                            <li>
                                <a
                                    style={newsbullets}
                                    href={this.state.data.articles[3].url}
                                    target="_blank"
                                >
                                    {this.state.data.articles[3].title}
                                </a>
                            </li>
                            <li>
                                <a
                                    style={newsbullets}
                                    href={this.state.data.articles[4].url}
                                    target="_blank"
                                >
                                    {this.state.data.articles[4].title}
                                </a>
                            </li>
                            <li>
                                <a
                                    style={newsbullets}
                                    href={this.state.data.articles[5].url}
                                    target="_blank"
                                >
                                    {this.state.data.articles[5].title}
                                </a>
                            </li>
                            <li>
                                <a
                                    style={newsbullets}
                                    href={this.state.data.articles[6].url}
                                    target="_blank"
                                >
                                    {this.state.data.articles[6].title}
                                </a>
                            </li>
                            <li>
                                <a
                                    style={newsbullets}
                                    href={this.state.data.articles[7].url}
                                    target="_blank"
                                >
                                    {this.state.data.articles[7].title}
                                </a>
                            </li>
                            <li>
                                <a
                                    style={newsbullets}
                                    href={this.state.data.articles[8].url}
                                    target="_blank"
                                >
                                    {this.state.data.articles[8].title}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsAPI;
