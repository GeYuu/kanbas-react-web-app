import ModulesControls from "./ModulesControls";
import { FaPlus } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { VscTriangleDown } from "react-icons/vsc";
import { PiNotePencilBold } from "react-icons/pi";
import './styles.css';

export default function Assignments() {
  return (
    <div>
      <div id="wd-modules">
        <ModulesControls />
        <br />        <br />

        <ul id="wd-modules" className="list-group rounded-0 border border-left-success">
          <li className="list-group-item p-0 fs-5 border-gray">
            <div className="wd-title p-3 ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <VscTriangleDown className="me-2 fs-3" />
              ASSIGNMENTS
              <ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilBold className="me-2 fs-3" />
                  </div>
                  <div className="w-75">
                    <a className="text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                      <div className="d-flex justify-content-between">A1</div>
                    </a>
                    <span className="text-secondary">
                      <span className="text-danger">Multiple Modules </span>
                      <span className="text-secondary">|</span>
                      <span className="text-dark"> Not available until</span>
                      <span className="text-secondary"> May 6 at 12:00am </span>
                      <span className="text-secondary">|</span>
                      <br />
                      <span className="text-dark"> Due</span>
                      <span className="text-secondary">
                        {" "}
                        May 13 at 11:59pm | 100 pts
                      </span>
                    </span>
                  </div>
                  <LessonControlButtons />
                </div>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilBold className="me-2 fs-3" />
                  </div>
                  <div className="w-75">
                    <a className="text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                      <div className="d-flex justify-content-between">A2</div>
                    </a>
                    <span className="text-secondary">
                      <span className="text-danger">Multiple Modules </span>
                      <span className="text-secondary">|</span>
                      <span className="text-dark"> Not available until</span>
                      <span className="text-secondary"> May 13 at 12:00am </span>
                      <span className="text-secondary">|</span>
                      <br />
                      <span className="text-dark"> Due</span>
                      <span className="text-secondary">
                        {" "}
                        May 20 at 11:59pm | 100 pts
                      </span>
                    </span>
                  </div>
                  <LessonControlButtons />
                </div>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilBold className="me-2 fs-3" />
                  </div>
                  <div className="w-75">
                    <a className="text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                      <div className="d-flex justify-content-between">A3</div>
                    </a>
                    <span className="text-secondary">
                      <span className="text-danger">Multiple Modules </span>
                      <span className="text-secondary">|</span>
                      <span className="text-dark"> Not available until</span>
                      <span className="text-secondary"> May 20 at 12:00am </span>
                      <span className="text-secondary">|</span>
                      <br />
                      <span className="text-dark"> Due</span>
                      <span className="text-secondary">
                        {" "}
                        May 27 at 11:59pm | 100 pts
                      </span>
                    </span>
                  </div>
                  <LessonControlButtons />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
