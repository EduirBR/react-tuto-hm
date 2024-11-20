type Props = {
    data: string[];
};

function List({ data }: Props) {
    const handleClick = (e: string) => {
        console.log(e);
    };

    return (
        <ul className="list-group">
            {data.map((d, index) => (
                <li
                    onClick={() => handleClick(d)}
                    key={d}
                    className="list-group-item"
                >
                    {index + 1}. {d}
                </li>
            ))}
        </ul>
    );
}

export default List;
