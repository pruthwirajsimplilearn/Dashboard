import { useHistory } from "react-router";
import { useState } from "react";
import DataServices from "../services/service.js";

function Login() {

    const history = useHistory()

    const [data, setData] = useState({
        "email": "",
        "password": ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        DataService.loginUser(data)
        .then(res => {
            const user = res.data.user;
            localStorage.setItem("token",user.token);
            alert("Login Successful");
            window.location.href = "/";
        }
        )
        .catch(err => {
            console.log("Error: ",err)
        }
        );
    }

    return (
        // <div className="container">
        //     <form style={{ "margin": "2em" }}>
        //         <h4>USER login</h4>
        //         <div className="mb-3">
        //             <label htmlFor="uname" className="form-label">User Name</label>
        //             <input type="text" name="name" className="form-control" id="uname" onChange={handleChange} />
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="upwd" className="form-label">User Password</label>
        //             <input type="password" name="password" className="form-control" id="upwd" onChange={handleChange} />
        //         </div>
        //         <button type="submit" className="btn btn-primary" onChange={handleLogin}>Login</button>
        //     </form>
        // </div>
        <div className="container">
            <form style={{ "margin": "2em" }} method="post">
                <h4>USER login</h4>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">User Email</label>
                    <input type="email" name="email" className="form-control" id="email" onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="upwd" className="form-label">User Password</label>
                    <input type="password" name="password" className="form-control" id="upwd" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Login</button>
                <div>
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
            </form>

        </div>
    )
}

export default Login;