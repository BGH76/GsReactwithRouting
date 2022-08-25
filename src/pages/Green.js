import React from "react";
import { Link } from "react-router-dom";
const Green = () => {

    return(
        <React.Fragment>
            <div className="page">
            You've Reached the <span className="green_letters">Green</span> Page
            </div>
            <div className="green">
            </div>
            <div className="home_link">
                <Link to={'/'}>Back to Home Page</Link>
            </div>
        </React.Fragment>
    );
}
export default Green;