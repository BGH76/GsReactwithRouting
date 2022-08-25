import React from "react";

import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div className="ui container">
            <div className="homepage">
                <h1>React with routing</h1>
                <p>Click a color </p>
            </div>
            <div className="ui grid">
                <div className="eight wide column">
                    <div className="red">
                        <div className="link">
                            <Link className="link_color" to="/red">Red Page</Link>
                        </div>
                    </div>
                </div>
                <div className="eight wide column">
                    <div className="yellow">
                        <div className="link">
                            <Link className="link_color" to="/yellow">Yellow Page</Link>
                        </div>
                    </div>
                </div>
                <div className="eight wide column">
                    <div className="blue">
                        <div className="link">
                            <Link className="link_color" to="/blue">Blue Page</Link>
                        </div>
                    </div>
                </div>
                <div className="eight wide column">
                    <div className="green">
                        <div className="link">
                            <Link className="link_color" to="/green">Green Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default Home;