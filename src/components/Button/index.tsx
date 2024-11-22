import { CSSProperties, MouseEventHandler } from "react";
import styles from "./Button.module.css";

import styled from "styled-components";

interface ButtonProps {
    func: MouseEventHandler;
    clicked?: boolean;
    typeClass: {
        class: string;
        text: string;
    };
}

type BtnProps = {
    isLoading?: boolean;
};
const Btn = styled.button<BtnProps>`
    background-color: ${(props) => (props.isLoading ? "gray" : "red")};
    border-radius: 25%;
    padding: 25px 30px;
`;

function Button({ func, clicked, typeClass }: ButtonProps) {
    const cssStyle: CSSProperties = {
        // display: "flex",
        // justifyContent: "center",
    };
    console.log(styles);
    return (
        <div style={cssStyle}>
            <Btn
                // className={`btn ${typeClass.class}`}
                // className={[styles.button, styles.padded].join(" ")}
                onClick={func}
                disabled={clicked}
                isLoading={true}
            >
                {typeClass.text}
            </Btn>
        </div>
    );

    // return (
    //     <div style={cssStyle}>
    //         <button
    //             // className={`btn ${typeClass.class}`}
    //             className={[styles.button, styles.padded].join(" ")}
    //             onClick={func}
    //             disabled={clicked}
    //         >
    //             {typeClass.text}
    //         </button>
    //     </div>
    // );
}

export default Button;
