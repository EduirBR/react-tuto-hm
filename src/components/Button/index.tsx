import { CSSProperties, MouseEventHandler } from "react";
import "./Button.css";
interface ButtonProps {
    func: MouseEventHandler;
    clicked?: boolean;
    typeClass: {
        class: string;
        text: string;
    };
}

function Button({ func, clicked, typeClass }: ButtonProps) {
    const cssStyle: CSSProperties = {
        // display: "flex",
        // justifyContent: "center",
    };

    return (
        <div style={cssStyle}>
            <button
                className={`btn ${typeClass.class}`}
                onClick={func}
                disabled={clicked}
            >
                {typeClass.text}
            </button>
        </div>
    );
}

export default Button;
