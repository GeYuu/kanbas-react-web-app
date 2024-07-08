export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="1">ASSIGNMENTS</option>
                <option value="2">QUIZ</option>
                <option value="3">EXAM</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" >
                <option value="1">Percentage</option>
                <option value="2">Complete/Incomplete</option>
                <option value="3">Letter Grade</option>
              </select>

            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <div>
            <td >
              <select id="wd-submission-type" >
                <option value="1">Online</option>
                <option value="2">On Paper</option>
                <option value="3">No Submission</option>
              </select><br/>
              
              <label htmlFor="wd-submission-type">Online Entry Options</label><br></br>
              <input type="checkbox" name="check-textentry" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>
              <input type="checkbox" name="check-url" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>
              <input type="checkbox" name="check-media" id="wd-media-recording"/>
              <label htmlFor="wd-media-recording">Media Recording</label><br/>
              <input type="checkbox" name="check-annotation" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
              <input type="checkbox" name="check-fileupload" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Upload</label><br/>         
            </td>
            </div>
          </tr>
          <tr>


            <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
            </td>


            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br/>
              <input id="wd-assign-to" value="Everyone"></input><br/>

              <label htmlFor="wd-wd-due-date">Due</label><br/>
              <input id="wd-due-date" type="date" value="2024-05-13"></input><br/>

              <tr>
              <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label><br/>
              <input id="wd-available-from" type="date" value="2024-05-06"></input><br/>
              </td>

              <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until</label><br/>
              <input id="wd-available-until" type="date" value="2024-05-20"></input><br/>
              </td>
              </tr>




            </td>
            
          </tr>


        </table>
      </div>
  );}
  