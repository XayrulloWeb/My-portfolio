import React from 'react';

function Skills(props) {
    return (
        <div className="skills">
            <div className="container">
                <div className="skills_start">
                    <div className="skills_text">
                        <h3>My Skills</h3>
                    </div>

                    <div className="skills_content">
                        <div className="skills_content-start">
                            <div className="skill_content">
                                <h3>50%</h3>
                                <p>HTML</p>
                            </div>

                            <div className="skill_content">
                                <h3>30%</h3>
                                <p>CSS</p>
                            </div>

                            <div className="skill_content">
                                <h3>15%</h3>
                                <p>REACT</p>
                            </div>

                            <div className="skill_content">
                                <h3>5%</h3>
                                <p>JAVASCRIPT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
