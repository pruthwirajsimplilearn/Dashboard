
function Home() {
    return (
        <div className="container">
            <div className="row justify-content-md-center align-items-center" 
                style={{
                    position: 'absolute', left: '50%', top: '45%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <div className="col-md-auto">
                    <h1>Welcome to the <span className="text-primary"> Dashboard</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Home;