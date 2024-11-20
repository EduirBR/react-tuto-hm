import { useState } from "react";

type Props = {
    data: string[];
};

function List({ data }: Props) {
    //state hook
    // regresa el valor seleccionado y la funcion para modificarlo
    // se inicializa en -1 para que no tenga ninguno seleccionado
    const [selected, setIndex] = useState(-1);
    const handleClick = (e: string, index: number) => {
        setIndex(index);
        console.log(e);
    };

    return (
        <ul className="list-group">
            {data.map((d, index) => (
                <li
                    onClick={() => handleClick(d, index)}
                    key={d}
                    className={`list-group-item ${
                        selected == index ? "active" : ""
                    }`}
                >
                    {index + 1}. {d}
                </li>
            ))}
        </ul>
    );
}

export default List;
