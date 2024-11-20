import { CSSProperties, ReactNode } from "react";
interface CardBodyProps {
    title: String;
    bodyText: String;
}
interface CardProps {
    children: ReactNode; // children se usa para pasar otro componente
}

function Card(props: CardProps) {
    const { children: body } = props;
    //otra forma de dart estilos al componente
    const cardStyle: CSSProperties = {
        width: "350px",
        margin: "10px",
    };

    return (
        <div className="card" style={cardStyle}>
            <div className="card-body">{body}</div>
        </div>
    );
}

export function CardBody(props: CardBodyProps) {
    const { title, bodyText } = props;
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{bodyText}</p>
        </>
    );
}

export default Card;
