import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import './styles.css';
import { VscTriangleDown } from "react-icons/vsc";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";

import { FaPlus } from "react-icons/fa";

import ModuleControlButtons from "./ModuleControlButtons";
import './styles.css';


export default function Assignments() {
  const { cid } = useParams();
  const course = db.courses.find((c) => c._id === cid);
  const assignments = db.assignments.filter((a) => a.course === cid);


  return (
    <div>
      <div id="wd-modules">
        <ModulesControls />
        <br/>

        <ul id="wd-modules" className="list-group rounded-0 border border-left-success">
          <li className="list-group-item p-0 fs-5 border-gray">
            <div className="wd-title p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <VscTriangleDown className="me-2 fs-3" />
              ASSIGNMENTS
              <ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {assignments.map((assignment) => (
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
                    <LessonControlButtons />
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
