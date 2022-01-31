import React from "react";

class PendingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>The Pending Tasks are</h2>
        {this.props.itemsPending.map((item) =>
          item.active ? (
            <div>
              <h3>{item.title}</h3>
              {/* <br /> */}
              <button
                onClick={() => {
                  this.props.updatedItems(item.id);
                }}
              >
                Done
              </button>
              <br />
              <br />
              <button
                onClick={() => {
                  this.props.deleteItem(item.id);
                }}
              >
                Delete
              </button>
            </div>
          ) : (
            <>
              <h2>{this.props.deletePendingItemsOnCompletions}</h2>
            </>
          )
        )}
      </div>
    );
  }
}

export default PendingComponent;
