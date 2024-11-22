import { CSSProperties, MouseEventHandler } from "react";
import styles from "./Button.module.css";
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
    console.log(styles);
    return (
        <div style={cssStyle}>
            <button
                // className={`btn ${typeClass.class}`}
                className={[styles.button, styles.padded].join(" ")}
                onClick={func}
                disabled={clicked}
            >
                {typeClass.text}
            </button>
        </div>
    );
}

export default Button;
