import React from 'react';

function Portfolio(props) {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="portfolio_start">
                    <div className="portfolio_text">
                        <h3>Portfolio</h3>
                    </div>
                    <div className="portfolio_img">
                        <div className="portfolio_project-one">
                           <a target="_blank" href="http://building-uz.netlify.app/"><p>Строительная компания</p></a>
                        </div>

                        <div className="portfolio_project-two">
                            <a target="_blank" href="https://injener-uz.netlify.app/"><p>Студия дизайна</p></a>

                        </div>

                        <div className="portfolio_project-three">
                            <a target="_blank" href="https://online-cource-xayrulloweb.netlify.app/"><p>Компания</p></a>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Portfolio;
