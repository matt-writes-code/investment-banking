import React, { Component } from "react";

const bnm = api =>
  `https://uptime-diagnostics-response-bodies-production.s3.amazonaws.com/d098-fa5968b03dbc0137a0e50242ac110004/cb937a6a37554486b930b85492b23938/fa598f303dbc0137a0e50242ac110004?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA2FDAY6YZOURFLA%2F20190410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190410T124925Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=5925fdfe82b519b1266204846e94f36f0ecb9ad797767c214e72685fdbac8bad`;

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
