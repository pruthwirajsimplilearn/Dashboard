import { useState } from "react";
import DataService from "../services/service";

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
        marginTop: "20px",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7ac8ff"
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
function Login() {
    const [error, setError] = useState("");
    const [data, setData] = useState({
        "email": "",
        "password": ""
    })
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        setError("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email === "" || data.password === "") {
            setError("Please fill all fields");
        }
        else {
            DataService.loginUser(data)
                .then(res => {
                    if (res.data.success) {
                        const user = res.data.user;
                        localStorage.setItem("token", user.token);
                        alert("Login Successful");
                        window.location.href = "/";
                    }
                    else {
                        alert(res.data.message);
                    }
                }
                )
                .catch(err => {
                    console.log("Error: ", err)
                }
                );
        }


    }
    const handleShowHide = () => {
        if (document.getElementById("upwd").type === "password" && document.getElementById("checkbox").checked) {
            document.getElementById("upwd").type = "text";
        } else {
            document.getElementById("upwd").type = "password";
        }
    }

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row" style={styles.form}>
                    <div className="col-md-6 d-none d-md-block d-lg-block">
                        <div>
                            <img src="assest/man.svg" alt="logo" style={{ width: "100%" }} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <div style={styles.container}>
                                <i className="fa fa-lock" style={styles.lockicon} />
                                <h4>User Login</h4>
                            </div>
                            <form style={styles.form}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email *</label>
                                    <input autocomplete="off" value={data.email} style={styles.input} type="email" name="email" placeholder="Enter Email" className="form-control" id="email" onChange={handleChange} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="upwd" className="form-label">Password *</label>
                                    <input style={styles.input} value={data.password} type="password" placeholder="Enter Password" name="password" className="form-control" id="upwd" onChange={handleChange} />
                                </div>

                                <div>
                                    <input id="checkbox" type="checkbox" onChange={handleShowHide} /> Show Password
                                    <p style={styles.error}>{error}</p>
                                </div>
                                <button style={styles.button} type="submit" className="btn btn-primary" onClick={handleSubmit} >Login</button>
                                <div>
                                    <p>Don't have an account? <a href="/register">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;