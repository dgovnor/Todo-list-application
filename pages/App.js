import React, { Component } from "react";
import List from "./list";
import Head from "next/head";

class App extends Component {
  state = {
    todo: "",
    todoItem: []
  };
  onChange = action => {
    this.setState({ todo: action.target.value });
  };

  onSubmit = action => {
    action.preventDefault();
    if (this.state.todo == "") {
      alert("Please enter a todo");
      return;
    }
    this.setState({
      todo: "",
      todoItem: [...this.state.todoItem, this.state.todo]
    });
  };
  onDelete = action => {
    const todoItem = this.state.todoItem.filter(c => c !== action);
    this.setState({ todoItem });
  };

  render() {
    return (
      <div className="container">
        <Head>
          <title>Todo-list App</title>
          <link
            rel="stylesheet"
            href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Margarine|Germania One"
            rel="stylesheet"
          />
        </Head>
        <p
          style={{ color: "green", "font-family": "Germania One" }}
          className="h1"
        >
          What will you like to do?
        </p>
        <div className="form-group">
          <form onSubmit={this.onSubmit}>
            <input value={this.state.todo} onChange={this.onChange} />

            <button className="btn btn-primary m-2">Submit</button>
          </form>
        </div>

        <List todo={this.state.todoItem} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
