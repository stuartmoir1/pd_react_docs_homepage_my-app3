import React, { Component } from 'react';

// JSX functions...

function LineBreak(props) {
  return <div><br></br></div>;
}

function ToDoInput(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="new-todo">What needs to be done?<LineBreak /></label>
      <input
        id="new-todo"
        onChange={props.onChange}
        value={props.value}
      />
      <button>Add #{props.nextNumber}</button>
    </form>
  );
}

function ToDoList(props) {
  return (
    <div>
      <h3>To-do List</h3>
      <ol>{props.items.map(item => <li key={item.id}>{item.text}</li>)}</ol>
    </div>
  );
}

// ...or, Javascript functions

//function LineBreak(props) {
//  return React.createElement(
//    "div", null,
//    React.createElement("br", null)
//  );
//}

//function ToDoInput(props) {
//  return React.createElement(
//    "form", { onSubmit: props.onSubmit },
//    React.createElement( "label", { htmlFor: "new-todo" }, "What needs to be done?", React.createElement(LineBreak, null)),
//    React.createElement("input", { id: "new-todo", onChange: props.onChange, value: props.value }),
//    React.createElement("button", null, "Add #", props.nextNumber)
//  );
//}

//function ToDoList(props) {
//  return React.createElement(
//    "div", null,
//    React.createElement("h3", null, "To-do List"),
//    React.createElement(
//      "ol", null,
//      props.items.map(item => React.createElement("li", {key: item.id}, item.text))
//    )
//  );
//}

class ToDoListApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };

    // Not required for arrow handle functions
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) return;
    const newItem = { id: Date.now(), text: this.state.text };
    this.setState(state => ({ items: state.items.concat(newItem), text: "" }));
  }

  // JSX render...
 
  render() {
    return (
      <div>
        <ToDoList items={this.state.items} />
        <ToDoInput
          value={this.state.text}
          nextNumber={this.state.items.length + 1}

          // Bound handle functions...          
          //onChange={this.handleChange}
          //onSubmit={this.handleSubmit}

          // ...or, arrow handle functions
          onChange={(e) => this.handleChange(e)}
          onSubmit={(e) => this.handleSubmit(e)}

        />
      </div>
    );
  }

  // ...or, Javascript render

  //render() {
  //  return React.createElement(
  //    "div", null,
  //    React.createElement(ToDoList, { items: this.state.items }),
  //    React.createElement(ToDoInput, {
  //      value: this.state.text,
  //      nextNumber: this.state.items.length + 1,
  //      //onChange={this.handleChange}  // Bound handle functions...
  //      //onSubmit={this.handleSubmit}
  //      onChange: (e) => this.handleChange(e), // ...or, arrow handle functions
  //      onSubmit: (e) => this.handleSubmit(e)
  //    })
  //  );
  //}
}

export default ToDoListApp;
