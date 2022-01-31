import React from "react";

class TrashComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>The Trash Components are</h2>
        {this.props.itemsTrashed.map((item) => (
          <div>
            <h3>{item.title}</h3>
            <button onClick={() => this.props.deleteTrashItems(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default TrashComponent;
