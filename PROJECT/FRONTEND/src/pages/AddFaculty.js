import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddFaculty() {
    const [data,setData] = useState()
    const navigate = useNavigate()
    const apiUrl = 'http://localhost:5000/faculty'
    return <>
        <div class="container" style={{marginTop: '50px'}}>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header" style={{backgroundColor: '#007bff',color: 'white', textAlign: 'center'}}>
                        <h4>Faculty Form</h4>
                        </div>

                        <div class="card-body">
                                <div class="form-group">
                                    <label for="id">ID</label>
                                    <input type="text" class="form-control mt-2" id="id" name="id" placeholder="Enter faculty ID" style={{borderColor: '#007bff'}} onChange={(e)=>{
                                        setData({...data,faclty_id:e.target.value})
                                    }} />
                                </div>
                                <div class="form-group mt-2">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control mt-2" id="name" name="name" placeholder="Enter faculty name" style={{borderColor: '#007bff'}} onChange={(e)=>{
                                        setData({...data,name:e.target.value})
                                    }} />
                                </div>
                                <div class="form-group">
                                    <label for="id">Salary</label>
                                    <input type="text" class="form-control mt-2" id="id" name="id" placeholder="Enter faculty salary" style={{borderColor: '#007bff'}} onChange={(e)=>{
                                        setData({...data,salary:e.target.value})
                                    }} />
                                </div>
                                <div class="form-group mt-2">
                                    <label for="image">Image URL</label>
                                    <input type="text" class="form-control mt-2" id="image" name="image" placeholder="Enter image URL" style={{borderColor: '#007bff'}} onChange={(e)=>{
                                        setData({...data,image:e.target.value})
                                    }} />
                                </div>

                                <button type="submit" class="btn btn-primary mt-3" style={{width: '100%', backgroundColor: '#007bff'}} onClick={()=>{
                                    fetch(apiUrl,{
                                        method:'POST',
                                        body:JSON.stringify(data),
                                        headers:{
                                            "content-type":"application/json"
                                        }
                                    })
                                    .then(
                                        (res)=>{
                                            navigate('/faculty')
                                        }
                                    )
                                }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default AddFaculty