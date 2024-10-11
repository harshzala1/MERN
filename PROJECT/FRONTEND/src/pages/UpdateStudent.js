    import { useEffect, useState } from "react";
    import { useNavigate, useParams } from "react-router-dom";

    function UpdateStudent() {
    const [data, setData] = useState({}); 
    const navigate = useNavigate();
    const { id } = useParams(); // Destructure `params` to get the `id`

    useEffect(() => {
        fetch("http://localhost:4500/student/" + id) // Add http:// to the URL
        .then((res) => {
            if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then((res) => setData(res))
        .catch((error) => {
            console.error("There was a problem with fetching the student data:", error);
        });
    }, [id]);

    const handleSubmit = () => {
        fetch("http://localhost:4500/student/" + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((res) => {
            if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(() => {
            navigate("/student");
        })
        .catch((error) => {
            console.error("There was a problem updating the student data:", error);
        });
    };

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
            <h2 className="text-center mb-4">Update Student</h2>

            <div className="mb-3">
                <label htmlFor="rollNoInput" className="form-label">Roll No</label>
                <input
                type="text"
                className="form-control mt-2"
                value={data.rollno || ""} // Ensure no undefined values are passed
                onChange={(e) => setData({ ...data, rollno: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name</label>
                <input
                type="text"
                className="form-control mt-2"
                value={data.name || ""}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="imageInput" className="form-label">Image URL</label>
                <input
                type="text"
                className="form-control mt-2"
                value={data.image || ""}
                onChange={(e) => setData({ ...data, image: e.target.value })}
                />
            </div>

            <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
                </button>
                <button className="btn btn-secondary" onClick={() => navigate("/student")}>
                Back
                </button>
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default UpdateStudent;
