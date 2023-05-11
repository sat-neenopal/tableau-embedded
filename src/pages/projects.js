import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import dummyImage from ".././assets/dummy-image.jpg";

export default function Projects() {
    const wArray = ["1", "2", "3", "4", "5", "6"];
    const [activeProject, setActiveProject] = useState("1")

    return (
        <div className="workbook-conatiner">
            <h2>Projects List</h2>
            <div className="project-grid">
                <div className="nav-tabs">
                    {wArray.map((e) => (
                        <Button color={`${activeProject == e ? "primary" : "secondary"}`}
                            className={`${activeProject == e ? "active" : "inactive"} nav-item`} onClick={() => setActiveProject(e)}>{e}</Button>
                    ))}
                </div>
                <div className="embedded-project">
                    <img src={dummyImage}></img>
                </div>

            </div>
        </div>
    );
}
