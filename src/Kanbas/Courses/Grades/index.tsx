
import { FaFileImport, FaFileExport, FaCog, FaFilter } from 'react-icons/fa';


export default function Grades() {
    return (
        <div className="container mt-4">
            <div className="col-12 mb-4 d-flex justify-content-end">
                <div className="btn-group">
                    <button className="btn btn-secondary">
                        <FaFileImport className="me-1" /> Import
                    </button>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaFileExport className="me-1" /> Export
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Export as CSV</a></li>
                            <li><a className="dropdown-item" href="#">Export as PDF</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-secondary">
                        <FaCog />
                    </button>
                </div>
            </div>
            <div className="row mb-3">



                <div className="col-md-6">
                    <label htmlFor="student-names" className="form-label">Student Names</label>
                    <input id="student-names" className="form-control" type="search" placeholder="Search Students" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="assignment-names" className="form-label">Assignment Names</label>
                    <input id="assignment-names" className="form-control" type="search" placeholder="Search Assignments" />
                </div>

            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>A1 SETUP<br /> Out of 100</th>
                            <th>A2 HTML<br /> Out of 100</th>
                            <th>A3 CSS<br /> Out of 100</th>
                            <th>A4 BOOTSTRAP<br /> Out of 100</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jane Adams</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>66.22%</td>
                        </tr>
                        <tr>
                            <td>Christina Allen</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>92.18%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>Sameera Ansari</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>Han Bao</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>
                                <input type="number" className="form-control" defaultValue="88.03" />
                            </td>
                            <td>98.99%</td>
                        </tr>
                        <tr>
                            <td>Mehdi Sai Srinivas Bobbili</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>98.37%</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>Siran Cao</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
