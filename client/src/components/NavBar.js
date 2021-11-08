export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Project Report</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/features">Features</a>
                    </li>
                </ul>
                <div className="navbar-nav ml-auto d-flex">
                    {localStorage.getItem('token') ?
                        <li className="nav-item">
                            <a className="nav-link"
                                onClick={() =>
                                    localStorage.removeItem('token')
                                }
                                href="/">Logout</a>
                        </li> :
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    }
                </div>
            </div>
        </nav>
    )
}