import { useHistory } from "react-router";
import { useState } from "react";
import DataServices from "../services/service.js";

function Login() {

    const history = useHistory()

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

    const handleLogin = (e) => {
        e.preventDefault();
        DataServices.userLogin(data)
            .then(res => {
                console.log(res);
                if (res.data !== null) {
                    alert("login successfull")
                    history.push('/')
                }
                else {
                    alert("Wrong Credentials")
                }
            })
            .catch(e => {
                console.log("i am here");
                console.log(e.message);
            })
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
            <form style={{ "margin": "2em" }}>
                <h4>USER LOGIN</h4>
                <div className="mb-3">
                    <label htmlFor="uname" className="form-label">User Name</label>
                    <input type="text" name="name" className="form-control" id="uname" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="upwd" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="upwd" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button><br />
            </form>
        </div>
    )
}

export default Login;