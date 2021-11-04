import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <div className="row justify-content-md-center align-items-center" 
                style={{
                    position: 'absolute', left: '50%', top: '45%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <div className="col-lg-5">
                    <Link to="/login"><button className="btn btn-success">Login Here</button></Link>
                </div>
                <div className="col-lg-4">
                    <Link to="/register"><button className="btn btn-primary">Register Here</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;