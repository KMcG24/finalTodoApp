import React from "react";
import Input from "../Input";
import List from "../List";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  //function to take value from handleClick and put it in list item
  //add to an array
  createListItem = event => {
    this.props.onHandleClick(event.target.value);
    return a list item[]
  };
  

  render() {
    const listItem = [this.props.input];

    return (
      <div>
        <ul />
      </div>
    );
  }
}

export default Item;
