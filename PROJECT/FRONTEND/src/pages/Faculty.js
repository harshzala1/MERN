import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Faculty() {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const apiUrl = "http://localhost:5000/faculty";
    

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const formattedFaculty = data.map((fac) => {
        return (
            <div className="col-md-4 mb-4" key={fac.faclty_id}>
                <div className="card" style={{ width: '100%' }}>
                    <img src={fac.image} className="card-img-top" alt={fac.name} />
                    <div className="card-body">
                        <p className="card-text">{fac.name}</p>
                        <Link className="btn btn-primary" to={"/faculty/" + fac.faclty_id}>Read More</Link>
                        <Link className="btn btn-primary m-2" to={"/facultys/" + fac.faclty_id}>Update</Link>
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
                    <button className="btn btn-primary" style={{ width: '100%' }} onClick={()=>{
                        navigate('/faculty/add')
                    }}>Add</button>
                </div>
                
                {/* Faculty cards */}
                <div className="col-md-10 m-2">
                    <div className="row">
                        {formattedFaculty}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faculty;
