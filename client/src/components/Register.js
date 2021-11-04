function Register() {
    return (
        <div className="container">
            <form style={{ "margin": "2em" }} method="post">
                <h4>USER REGISTRATION</h4>
                <div className="mb-3">
                    <label htmlFor="uname" className="form-label">User Name</label>
                    <input type="text" name="name" className="form-control" id="uname"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="upwd" className="form-label">User Password</label>
                    <input type="password" name="password" className="form-control" id="upwd" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Register;