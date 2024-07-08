export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course"> 
            <img src="/images/python.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5325/Home">
                CS5325 Python
              </a>
              <p className="wd-dashboard-course-title">
                Python programming
              </p>
              <a href="#/Kanbas/Courses/5325/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/java.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1231/Home">
                CS1231 Java
              </a>
              <p className="wd-dashboard-course-title">
                Java programming
              </p>
              <a href="#/Kanbas/Courses/1231/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/csharp.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1232/Home">
                CS1232 C#
              </a>
              <p className="wd-dashboard-course-title">
                C# programming
              </p>
              <a href="#/Kanbas/Courses/1232/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/javascript.png" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1233/Home">
                CS1233 JavaScript
              </a>
              <p className="wd-dashboard-course-title">
                JavaScript programming
              </p>
              <a href="#/Kanbas/Courses/1233/Home"> Go </a>
          </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/angular.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1235/Home">
                CS1235 Angular
              </a>
              <p className="wd-dashboard-course-title">
                Angular programming
              </p>
              <a href="#/Kanbas/Courses/1235/Home"> Go </a>
              </div>
            </div>
          <div className="wd-dashboard-course">
            <img src="/images/nodejs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1236/Home">
                CS1236 Node JS
              </a>
              <p className="wd-dashboard-course-title">
                Node JS programming
              </p>
              <a href="#/Kanbas/Courses/1236/Home"> Go </a>
            </div>
          </div>
        </div>
      </div>

  );}
  