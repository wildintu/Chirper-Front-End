import React, { Component } from "react";
import Chirp from "./Chirp";

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "What's my name?",
      placeholder: "I'm holding this spot.",
      chirper: [],
      namevalue: "",
      textvalue: ""
    };
  }

  handleClick = e => {
    console.log(e);
    e.preventDefault();
    this.setState({
      chirper: [
        ...this.state.chirper,
        <Chirp
          key={this.state.chirper.length}
          name={this.state.namevalue}
          placeholder={this.state.textvalue}
        />
      ]
    });
  };

  handleChange = (e, id) => {
    if (id === "name_input") {
      this.setState({ namevalue: e });
    } else if (id === "text_input") {
      this.setState({ textvalue: e });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-info">
          <h1 className="timeline-header text-center p-4 text-white">CHIRRRRRP!</h1>
        </div>
        <form className="main-form mt-5">
          <div className="group1 form-group d-flex container-xl justify-content-center">
            <input
              className="name-field form-control col-sm-3 mr-1"
              type="text"
              id="name_input"
              value={this.state.namevalue}
              placeholder={this.state.name}
              onChange={e => this.handleChange(e.target.value, "name_input")}
            />
            <input
              className="chirp-field form-control col-sm-3 mr-1"
              type="text"
              id="text_input"
              value={this.state.textvalue}
              placeholder={this.state.placeholder}
              onChange={e => this.handleChange(e.target.value, "text_input")}
            />
            <button
              className="chirp-button btn btn-primary rounded"
              onClick={e => this.handleClick(e)}
            >
              Call Me Button
            </button>
          </div>
          {/* <Chirp />
        <Chirp /> */}
        </form>
        <div className="d-flex justify-content-center ">
          <div className="flex-column">{this.state.chirper}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Timeline;
