import React from "react";
import Input from "../Input";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItemsArray: ["wash dishes", "mop floor"]
    };
  }

  render() {
    return (
      <div>
        <div>value={this.state.listItemsArray[0]}</div>

        <div>value={this.state.listItemsArray[1]}</div>
      </div>
    );
  }
}

export default List;
