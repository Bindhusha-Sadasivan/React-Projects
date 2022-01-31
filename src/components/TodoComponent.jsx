import React from "react";
import PendingComponent from "./PendingComponent";
import CompletedComponent from "./CompletedComponent";
import TrashComponent from "./TrashComponent";

let todos = [
  {
    id: 1,
    status: true,
    title: "Completd HTML",
    active: false,
  },
  {
    id: 2,
    status: true,
    title: "Completd CSS",
    active: false,
  },
  {
    id: 3,
    status: true,
    title: "Completd Bootstrap",
    active: false,
  },
  {
    id: 4,
    status: true,
    title: "Completd JavaScript",
    active: false,
  },
  {
    id: 5,
    status: false,
    title: "Started React",
    active: true,
  },
  {
    id: 6,
    status: false,
    title: "Start MongoDB on December",
    active: true,
  },
  {
    id: 7,
    status: false,
    title: "Started Express on January ",
    active: true,
  },
  {
    id: 8,
    status: false,
    title: "Start MongoDB on February",
    active: true,
  },
];

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: todos };
  }

  getPendingItems = () => {
    const pendingItems = this.state.todos.filter(
      (todositem) => todositem.status === false
    );
    // console.log(pendingItems);
    return pendingItems;
  };

  getCompletedItems = () => {
    const completedItems = this.state.todos.filter(
      (todositem) => todositem.status === true
    );
    // console.log(completedItems);
    return completedItems;
  };

  getTrashItems = () => {
    const deletedItems = this.state.todos.filter(
      (todositem) => todositem.active === false
    );
    return deletedItems;
  };

  changeCompletionStatus = (todoid) => {
    let completedStatus = [...this.state.todos];
    // console.log(completedStatus);
    let moveCompletedItems = completedStatus.find((item) => item.id === todoid);
    // console.log(completedStatus);
    moveCompletedItems.status = !moveCompletedItems.status;
    // console.log(completedStatus);
    this.setState({ todos: completedStatus });
  };

  deleteTodo = (todoid) => {
    let deletedStatus = [...this.state.todos];
    let moveDeletedStatus = deletedStatus.find((item) => item.id === todoid);
    moveDeletedStatus.active = !moveDeletedStatus.active;
    this.setState({ todos: deletedStatus });
  };

  deleteFromTrash = (todoid) => {
    let deletedItems = this.state.todos.filter((todo) => todo.id !== todoid);
    this.setState({ todos: deletedItems });
  };

  render() {
    return (
      <div>
        <PendingComponent
          itemsPending={this.getPendingItems()}
          updatedItems={this.changeCompletionStatus}
          deleteItem={this.deleteTodo}
        ></PendingComponent>

        <CompletedComponent
          itemsCompleted={this.getCompletedItems()}
        ></CompletedComponent>

        {/* <button onClick={this.getPendingItems}>Get Pending Items</button> */}
        {/* <br /> */}
        {/* <button onClick={this.changeCompletionStatus}>Check Status</button> */}

        <TrashComponent
          itemsTrashed={this.getTrashItems()}
          deletePendingItemsOnCompletions={this.deleteTodo}
          deleteTrashItems={this.deleteFromTrash}
        ></TrashComponent>
      </div>
    );
  }
}

export default TodoComponent;
