import React from "react";
import { Link } from "react-router-dom";
const Yellow = () => {

    return(
        <React.Fragment>
            <div className="page">
            You've Reached the <span className="yellow_letters">Yellow</span> Page
            </div>
            <div className="yellow">
            </div>
            <div className="home_link">
                <Link to={'/'}>Back to Home Page</Link>
            </div>
        </React.Fragment>
    );
}
export default Yellow;