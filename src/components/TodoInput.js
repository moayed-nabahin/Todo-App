import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text rounded-0 bg-primary text-white">
                <i className="fas fa-book p-1 " />
              </div>
            </div>
            <input
              type="text"
              className="form-control rounded-0 text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "form-control btn btn-success mt-3 text-capitalize"
                : "form-control btn btn-primary mt-3 text-capitalize"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
