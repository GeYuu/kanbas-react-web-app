
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="row">
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input
            id="wd-name"
            value="A1"
            className="form-control"
          />
        </div>
        <div className="mb-3">

          <textarea
            id="wd-description"
            className="form-control"
            rows={6}
          >
            The assignment is available online. Submit a link to the landing page
            of your Web application running on Netlify. The landing page should
            include the following: Your full name and section Links to each of the
            lab assignments Link to the Kanbas application Links to all relevant
            source code repositories The Kanbas application should include a link
            to navigate back to the landing page.
          </textarea>
        </div>



        <div className="col-3 mb-4">
          <label htmlFor="wd-points" className="form-label float-end">
            Points
          </label>
        </div>
        <div className="col-9 mb-4">
          <div className="form-group d-flex">
            <input id="wd-points" value={100} className="form-control" />
          </div>
        </div>



        <div className="col-3 mb-4">
          <label htmlFor="wd-group" className="form-label float-end">
            Assignment Group
          </label>
        </div>
        <div className="col-9 mb-4">
          <div className="form-group d-flex">
            <select id="wd-group" className="form-select">
              <option value="1">ASSIGNMENTS</option>
              <option value="2">QUIZ</option>
              <option value="3">EXAM</option>
            </select>
          </div>
        </div>



        <div className="col-3 mb-4">
          <label htmlFor="wd-display-grade-as" className="form-label float-end">
            Display Grade as
          </label>
        </div>
        <div className="col-9 mb-4">
          <div className="form-group d-flex">
            <select id="wd-display-grade-as" className="form-select">
              <option value="1">Percentage</option>
              <option value="2">Complete/Incomplete</option>
              <option value="3">Letter Grade</option>
            </select>
          </div>
        </div>


        <div className="col-3 mb-4">
          <label htmlFor="wd-submission-type" className="form-label float-end">
            Submission Type
          </label>
        </div>
        <div className="col-9 mb-4 border border-1 rounded-1">
          <br />
          <div className="form-group d-flex">
            <select id="wd-submission-type" className="form-select">
              <option value="1">Online</option>
              <option value="2">On Paper</option>
              <option value="3">No Submission</option>
            </select>
          </div>
          <div className="mb-3">
            <br />
            <label className="form-label"><b>Online Entry Options</b></label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-text-entry"
              />
              <label className="form-check-label" htmlFor="wd-text-entry">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-website-url"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-media-recording"
              />
              <label className="form-check-label" htmlFor="wd-media-recording">
                Media Recording
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-student-annotation"
              />
              <label className="form-check-label" htmlFor="wd-student-annotation">
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-file-upload"
              />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Upload
              </label>
            </div>
          </div>
        </div>


        <div className="col-3 mb-4">
          <label htmlFor="wd-submission-type" className="form-label float-end">
            Assign
          </label>
        </div>


        <div className="col-9 mb-4 border border-1 rounded-1">
          <div className="form-group mb-4">
            <label htmlFor="wd-assign-to" className="form-label mt-2">
              Assign to
            </label>
            <input
              id="wd-assign-to"
              value="Everyone"
              className="form-control"
            />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-due-date" className="form-label">
          Due
        </label>
        <input
          id="wd-due-date"
          type="datetime-local"
          value="2024-05-13T23:59"
          className="form-control"
        />
      </div>


      <div className="row">
      <div className="col-6">
        <label htmlFor="wd-available-from" className="form-label">
          Available from
        </label>
        <input
          id="wd-available-from"
          type="datetime-local"
          value="2024-05-06T00:00"
          className="form-control"
        />
      </div>
      <div className="col-6">
        <label htmlFor="wd-available-until" className="form-label">
          Available until
        </label>
        <input
          id="wd-available-until"
          type="datetime-local"
          value="2024-05-20T23:59"
          className="form-control"
        />
      </div>

      </div>




    </div>
    <br />     <br />     <br />     <br />
    <div className="d-flex justify-content-end">

<button className="btn btn-secondary me-2">Cancel</button>
<button className="btn btn-primary btn-danger">Save</button>
</div>
      </div >
    </div >
  );
}
