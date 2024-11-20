import { CSSProperties } from "react";

function Card() {
    const cardStyle: CSSProperties = {
        width: "350px",
        margin: "10px",
    };

    return (
        <div className="card" style={cardStyle}>
            <div className="card-body">
                <CardBody />
            </div>
        </div>
    );
}

function CardBody() {
    return (
        <>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick text as example here</p>
            <a href="" className="btn btn-primary">
                Go somewhere
            </a>
        </>
    );
}

export default Card;
