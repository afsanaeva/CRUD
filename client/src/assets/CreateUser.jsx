import React from "react";
import { Form } from "react-router-dom";

function CreateUser() {
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <from>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="enter name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="enter email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="enter age"
              className="form-control"
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </from>
      </div>
    </div>
  );
}

export default CreateUser;
