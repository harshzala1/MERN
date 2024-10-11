import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateFaculty() {
const [data, setData] = useState({}); 
const navigate = useNavigate();
const params = useParams();

useEffect(() => {
    fetch("http://localhost:5000/faculty/" + params.id)
    .then((res) => res.json())
    .then((res) => setData(res));
}, [params.id]);

return (
    <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
        <h2 className="text-center mb-4">Update Student</h2>

        <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">FacltyId</label>
            <input type="text" class="form-control mt-2" value={data.faclty_id}
            onChange={(e) => setData({ ...data, faclty_id: e.target.value })}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="rollNoInput" className="form-label">Name</label>
            <input type="text" class="form-control mt-2" value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Salary</label>
            <input type="text" class="form-control mt-2" value={data.salary}
            onChange={(e) => setData({ ...data, salary: e.target.value })}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="imageInput" className="form-label">Image URL</label>
            <input type="text" class="form-control mt-2" value={data.image}
            onChange={(e) => setData({ ...data, image: e.target.value })}
            />
        </div>

        <div className="d-flex justify-content-between">
            <button
            className="btn btn-primary"
            onClick={() => {
                fetch("http://localhost:5000/faculty/" + params.id, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
                }).then(() => {
                navigate("/faculty");
                });
            }}
            >
            Submit
            </button>

            <button
            className="btn btn-secondary"
            onClick={() => navigate("/faculty")}
            >
            Back
            </button>
        </div>
        </div>
    </div>
    </div>
);
}

export default UpdateFaculty;
