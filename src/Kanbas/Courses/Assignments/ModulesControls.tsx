import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function ModulesControls() {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <FaMagnifyingGlass />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            type="search"
            placeholder="Search for Assignments"
            aria-label="Search for Assignments"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-end">
        <button id="wd-add-assignment-group" className="btn btn-lg btn-light me-2 w-100">
          <FaPlus className="me-2" />
          Group
        </button>
        <button id="wd-add-assignment" className="btn btn-lg btn-danger w-100">
          <FaPlus className="me-2" />
          Assignment
        </button>
      </div>
    </div>
  );
}
