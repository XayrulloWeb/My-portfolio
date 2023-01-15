import React from 'react';
import {Link} from "react-router-dom";

function Portfolio(props) {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio_start">
                    <div className="portfolio_text">
                        <h3>Portfolio</h3>
                    </div>
                    <div className="portfolio_img">
                        <div className="portfolio_project-one">
                           <Link><p>Строительная компания</p></Link>
                        </div>

                        <div className="portfolio_project-two">
                            <Link><p>Студия дизайна</p></Link>

                        </div>

                        <div className="portfolio_project-three">
                            <Link><p>Компания</p></Link>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Portfolio;
