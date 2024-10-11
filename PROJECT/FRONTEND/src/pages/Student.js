import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Student() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const apiUrl = "http://localhost:4500/student"; 

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(res => setData(res))
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    const formattedStudent = data.map((stu) => {
        return (
            <div className="col-md-4 mb-4" key={stu.rollno}>
                <div className="card" style={{ width: '100%' }}>
                    <img src={stu.image} className="card-img-top" alt={stu.name} />
                    <div className="card-body">
                        <p className="card-text">{stu.name}</p>
                        <Link className="btn btn-primary" to={"/student/" + stu.rollno}>Read More</Link>
                        <Link className="btn btn-primary m-2" to={"/students/" + stu.rollno}>Update</Link>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container" style={{width:'100%', height:'100%'}}>
            <div className="row">
                {/* Left-side button */}
                <div className="col-md-1 mt-5 ">
                    <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => {
                        navigate('/student/add');
                    }}>Add</button>
                </div>
                
                {/* Faculty cards */}
                <div className="col-md-10 m-2">
                    <div className="row">
                        {formattedStudent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;
