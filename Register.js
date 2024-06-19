import React from "react";


const Register = () => {
    return (
        <div className="register-page">
            <h1>Join Us!</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;