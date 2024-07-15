import React from 'react';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                 href="#/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" alt="React JS"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                 href="#/Kanbas/Courses/1231/Home">
                <img src="/images/java.jpg" width="100%" alt="Java"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1231 Java
                  </h5>
                  <p className="card-text">
                    Java programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                 href="#/Kanbas/Courses/1232/Home">
                <img src="/images/csharp.jpg" width="100%" alt="C#"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1232 C#
                  </h5>
                  <p className="card-text">
                    C# programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                 href="#/Kanbas/Courses/1233/Home">
                <img src="/images/javascript.png" width="100%" alt="JavaScript"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1233 JavaScript
                  </h5>
                  <p className="card-text">
                    JavaScript programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                 href="#/Kanbas/Courses/1235/Home">
                <img src="/images/angular.jpg" width="100%" alt="Angular"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1235 Angular
                  </h5>
                  <p className="card-text">
                    Angular programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                 href="#/Kanbas/Courses/1236/Home">
                <img src="/images/nodejs.jpg" width="100%" alt="Node JS"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1236 Node JS
                  </h5>
                  <p className="card-text">
                    Node JS programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                 href="#/Kanbas/Courses/1512/Home">
                <img src="/images/python.jpg" width="100%" alt="Python"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1512 Python
                  </h5>
                  <p className="card-text">
                    Python programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
