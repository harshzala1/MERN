import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailFaculty() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = "http://localhost:5000/faculty/" + id;

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [apiUrl]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-success text-white text-center">
              <h2>Faculty Details</h2>
            </div>
            <div className="card-body text-center">
              <img
                src={data.image}
                alt={data.name}
                className="img-fluid rounded-circle mb-3"
                style={{ width: "150px", height: "150px" }}
              />
              <h3 className="card-title mb-3">Name: {data.name}</h3>
              <h3 className="card-title mb-3">Faculty_ID: {data.faclty_id}</h3>
              <h4 className="card-text mb-3">salary: {data.salary}</h4>
              <div className="d-flex justify-content-center mt-4">
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => {
                    fetch(apiUrl, { method: "DELETE" })
                      .then((res) => res.json())
                      .then(() => {
                        navigate("/faculty");
                      });
                  }}
                >
                  Delete
                </button>
                <Link to="/faculty" className="btn btn-info mx-2">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFaculty;
