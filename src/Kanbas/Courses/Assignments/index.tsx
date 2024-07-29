import { Link, useParams, useNavigate } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import './styles.css';
import { VscTriangleDown } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer"; // Import deleteAssignment action
import { FaPlus, FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import ModuleControlButtons from "./ModuleControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) => state.assignments.assignments.filter((a: any) => a.course === cid)); // Fetch assignments from Redux state

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  }

  const handleDeleteAssignment = (id: string) => {
    //pulls dialog box to confirm delete
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(id)); // Dispatch deleteAssignment action
    }
  }

  return (
    <div>
      <div id="wd-modules">
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
            <button id="wd-add-assignment"
              className="btn btn-lg btn-danger w-100"
              onClick={handleAddAssignment}
            >
              <FaPlus className="me-2" />
              Assignment
            </button>
          </div>
        </div>
        <br />
        <ul id="wd-modules" className="list-group rounded-0 border border-left-success">
          <li className="list-group-item p-0 fs-5 border-gray">
            <div className="wd-title p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <VscTriangleDown className="me-2 fs-3" />
              ASSIGNMENTS
              <ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {assignments.map((assignment: any) => (
                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <PiNotePencilBold className="me-2 fs-3" />
                    </div>
                    <div className="w-75">
                      <Link className="text-decoration-none text-dark" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                        <div className="d-flex justify-content-between">{assignment.title}</div>
                      </Link>
                      <span className="text-secondary">
                        <span className="text-danger">Multiple Modules </span>
                        <span className="text-secondary">|</span>
                        <span className="text-dark"> Not available until </span>
                        <span className="text-secondary">{new Date(assignment.availableFrom).toLocaleString()}</span>
                        <span className="text-secondary">|</span>
                        <br />
                        <span className="text-dark"> Due</span>
                        <span className="text-secondary">
                          {" "}
                          {new Date(assignment.dueDate).toLocaleString()} | {assignment.points} pts
                        </span>
                      </span>
                    </div>
                    <div className="float-end">
                      <FaTrash
                        className="text-danger me-2 mb-1"
                        onClick={() => handleDeleteAssignment(assignment._id)} // Correctly dispatch deleteAssignment
                      />
                      <GreenCheckmark />
                      <IoEllipsisVertical className="fs-4" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
