import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailStudent() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const apiUrl = `http://localhost:4500/student/${id}`; // Ensure the URL is correct

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        console.log("Fetched data:", res); // Log the fetched data to check
        setData(res); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("There was an error fetching the student details:", error);
      });
  }, [id]);

  const handleDelete = () => {
    fetch(apiUrl, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        console.log("Student deleted successfully");
        navigate("/student"); // Navigate to the student list after deletion
      })
      .catch((error) => {
        console.error("Error deleting the student:", error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card text-center shadow">
            <div className="card-header bg-primary text-white">
              <h4>Student Details</h4>
            </div>
            <div className="card-body">
              {/* Render student's image */}
              {data.image && (
                <img
                  src={data.image}
                  alt={data.name}
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                />
              )}

              {/* Render student's name */}
              {data.name ? (
                <h2 className="card-title mb-3">Name: {data.name}</h2>
              ) : (
                <p>Loading name...</p>
              )}

              {/* Render student's roll no */}
              {data.rollno ? (
                <h4 className="card-text mb-3">Roll No: {data.rollno}</h4>
              ) : (
                <p>Loading roll no...</p>
              )}

              <button className="btn btn-danger mx-2" onClick={handleDelete}>
                Delete
              </button>
              <Link to="/student" className="btn btn-info mx-2">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailStudent;
