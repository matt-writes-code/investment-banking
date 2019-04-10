import React, { Component } from "react";

const bnm = api =>
  `https://uptime-diagnostics-response-bodies-production.s3.amazonaws.com/bd70-5dc9fa103d8c013792950242ac110003/e9b384ad2a174af89f3ac39ab9723741/5dca1e203d8c013792950242ac110003?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA2FDAY6YZOURFLA%2F20190410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190410T070129Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=5832615bd06b19edaf6ee3c1a3197d2d8a4902176fc5fb3527ee554f0f68c539`;

class BNMapi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(bnm(this.props))
      .then(d => d.json())
      .then(d => {
        this.setState({
          data: d
        });
      });
  }

  render() {
    if (!this.state.data) return <p>Loading BNM API...</p>;
    return (
      <div className="count-one">
        <h3>Base Rate</h3>
        {this.state.data.data.map(x => (
          <li>
            {x.bank_name}: {x.base_rate}%
          </li>
        ))}
      </div>
    );
  }
}

export default BNMapi;
