import { useState } from "react"
import DataServices from "../services/service"

const styles = {
    lockicon: {
        fontSize: "2em",
        color: "#fff",
        margin: "0 auto",
        display: "block",
        marginBottom: "1em"
    },
    container: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    form: {
        borderRadius: "1em",
        marginTop:"20px",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7ac8ff",
        padding: "20px"
    },
    input: {
        backgroundColor: "transparent",
        width: "100%",
        height: "40px",
        border: "1px solid #000",
        padding: "0 10px",
        marginBottom: "10px"
    },
    button: {
        width: "100%",
        height: "40px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        color: "#000",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        marginBottom: "10px",
    },
    error: {
        color: "red",
        fontSize: "12px",
        marginBottom: "10px",
    },
};

function Register() {

    const [error, setError] = useState("");
    const [data, setData] = useState({
        "name": "",
        "email": "",
        "password": ""
    })
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        setError("");
    }

    const handleRegsiter = (e) => {
        e.preventDefault()
        if(data.name.trim() === "" || data.email.trim() === "" || data.password.trim() === ""){
            setError("Please fill all the fields")
        }
        else
        {
            if (data.name.trim().length < 3) {
                setError("Name must be atleast 3 characters long")
            }
            else if (!validateEmail(data.email.trim())) {
                setError("Please enter a valid email")
                
            }
            else if (data.password.trim().length < 5) {
                setError("Password must be atleast 5 characters long")
            }
            else {
               DataServices.iterUser(data)
            .then(res => {
                if (res.status === 201) {
                    alert('Successfully Registered. Login to Continue')
                    window.location.href = '/login'
                }
            })
            .catch(err => {
                alert(err)
            })
        }
        }
    }
    return (
        <div className="container-fluid">
            <div className="container">
            <div className="row" style={styles.form}>
                <div className="col-md-6">
                    <div>
                        <img src="assest/man.svg" alt="logo" style={{ width: "100%" }} />

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container">
                        <div style={styles.container}>
                            <i className="fa fa-user" style={styles.lockicon} />
                            <h4>USER REGISTRATION</h4>
                        </div>
                        <form style={{ "margin": "2em" }} method="post">
                
                <div className="mb-3">
                    <label htmlFor="uname" className="form-label">Full Name</label>
                    <input placeholder="Enter Name" autocomplete="off" style={styles.input} type="text" name="name" className="form-control" id="uname" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label> 
                    <input placeholder="Enter Email" autocomplete="off" style={styles.input} type="email" name="email" className="form-control" id="email" onChange={handleChange} />
                </div>   
                <div className="mb-3">
                    <label htmlFor="upwd" className="form-label">Password</label>
                    <input placeholder="Enter Password" style={styles.input} type="password" name="password" className="form-control" id="upwd" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <p style={styles.error}>{error}</p>
                </div>
                <button style={styles.button} type="submit" className="btn btn-primary" onClick={handleRegsiter}>Register</button>
                <div>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>
                    </div>
        </div>

        </div>
        </div>
        </div>
    )
}

export default Register;