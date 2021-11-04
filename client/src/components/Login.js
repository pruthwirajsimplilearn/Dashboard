import { useState } from "react";

function Login() {

    const [data, setData] = useState({
        "name": "",
        "password": ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="container">
            <form style={{ "margin": "2em" }} method="post">
                <h4>USER login</h4>
                <div className="mb-3">
                    <label htmlFor="uname" className="form-label">User Name</label>
                    <input type="text" name="name" className="form-control" id="uname" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="upwd" className="form-label">User Password</label>
                    <input type="password" name="password" className="form-control" id="upwd" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </div>
    )
}

export default Login;