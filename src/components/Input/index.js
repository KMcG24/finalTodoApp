import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //not setting the state - just saying the default state is an empty string
      input: ""
    };
  }

  handleChange = event => {
    this.setState({ input: event.target.input });
  };

  handleClick = input => {
    this.setState(state => ({
      input: input
    }));

    //   if {input} !== "string";
    //   return
  };

  render() {
    const listData = this.state.input;
    //create var to pass to Item component

    //want it to return a string
    return (
      <div>
        <input
          className="input"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={() => this.handleClick(this.state.input)}>
          Add To List
        </button>{" "}
        <Item />
      </div>
    );
  }
}

export default Input;
