type Props = {
    data: string[];
};

function List({ data }: Props) {
    return (
        <ul className="list-group">
            {data.map((d) => (
                <li key={d} className="list-group-item">
                    {d}
                </li>
            ))}
        </ul>
    );
}

export default List;
