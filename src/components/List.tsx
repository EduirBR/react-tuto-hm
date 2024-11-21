import { useState } from "react";

type Props = {
    data: string[];
    onSelect?: (e: string) => void;
};

function List({ data, onSelect }: Props) {
    //state hook
    // regresa el valor seleccionado y la funcion para modificarlo
    // se inicializa en -1 para que no tenga ninguno seleccionado
    const [selected, setIndex] = useState(-1);
    const handleClick = (e: string, index: number) => {
        setIndex(index);
        onSelect?.(e);
    };

    return (
        <ul className="list-group">
            {List.length
                ? data.map((d, index) => (
                      <li
                          onClick={() => handleClick(d, index)}
                          key={d}
                          className={`list-group-item ${
                              selected == index ? "active" : ""
                          }`}
                      >
                          {index + 1}. {d}
                      </li>
                  ))
                : "No hay nada para mostrar"}
        </ul>
    );
}

export default List;
