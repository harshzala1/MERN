import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
    const [data, setData] = useState({}); 
    const navigate = useNavigate();
    const apiUrl = "http://localhost:4500/student"; 
 

    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div
                            className="card-header"
                            style={{ backgroundColor: "#007bff", color: "white", textAlign: "center" }}
                        >
                            <h4>Student Form</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={(e) => {
        e.preventDefault(); 

        fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
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
            console.error("There was a problem with the fetch operation:", error);
        });
    }}>
                                <div className="form-group">
                                    <label htmlFor="id">ROLLNO</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder="Enter student Roll No"
                                        style={{ borderColor: "#007bff" }}
                                        onChange={(e) => {
                                            setData({ ...data, rollno: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder="Enter student name"
                                        style={{ borderColor: "#007bff" }}
                                        onChange={(e) => {
                                            setData({ ...data, name: e.target.value });
                                        }}
                                    />
                                </div>
                                

                                <div className="form-group mt-2">
                                    <label htmlFor="image">Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder="Enter image URL"
                                        style={{ borderColor: "#007bff" }}
                                        onChange={(e) => {
                                            setData({ ...data, image: e.target.value });
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary mt-3"
                                    style={{ width: "100%", backgroundColor: "#007bff" }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddStudent;
