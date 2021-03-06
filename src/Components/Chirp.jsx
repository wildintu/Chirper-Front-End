import React, { Component } from "react";

class Chirp extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card mt-3" style={{ width: "18rem" }}>
          <h4 className="chirpheader text-center card-header p-0 bg-info text-white">
            {`${this.props.name}`}
          </h4>
          <p className="chirpbody text-center card-body text-secondary">
            {`${this.props.placeholder}`}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Chirp;
