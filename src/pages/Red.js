import React from "react";
import { Link } from "react-router-dom";
const Red = () => {

    return(
        <React.Fragment>
            <div className="page">
            You've Reached the <span className="red_letters">Red</span> Page
            </div>
            <div className="red">
            </div>
            <div className="home_link">
                <Link to={'/'}>Back to Home Page</Link>
            </div>
        </React.Fragment>
        
    );
}
export default Red;