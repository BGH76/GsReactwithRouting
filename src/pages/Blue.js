import React from "react";
import { Link } from "react-router-dom";

const Blue = () => {

    return(
        <React.Fragment>
            <div className="page">
            You've Reached the <span className="blue_letters">Blue</span> Page
            </div>
            <div className="blue">
            </div>
            <div className="home_link">
                <Link to={'/'}>Back to Home Page</Link>
            </div>
        </React.Fragment>
    );
}
export default Blue;