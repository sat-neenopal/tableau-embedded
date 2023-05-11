import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import dummyImage from "./assets/dummy-image.jpg";

export default function Workbooks() {
  const wArray = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="workbook-conatiner">
    <h2>WorkBook List</h2>
      <div className="workbook-grid">
        {wArray.map((e) => (
          <Card style={{ width: "18rem" }} key={e}>
            <Card.Img variant="top" src={dummyImage} />
          </Card>
        ))}
      </div>
    </div>
  );
}
