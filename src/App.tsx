import { useState } from "react";
import Button from "./components/button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
    const characters: string[] = ["Goku", "Tanjiro", "Eren"];
    const handleSelect = (e: string) => {
        console.log(e);
    };
    const [clicked, setState] = useState(false);

    const typeClass = clicked
        ? { class: "btn-secondary", text: "loading..." }
        : { class: "btn-primary", text: "Primary" };

    const changeState = () => {
        setState(true);
    };

    return (
        <div>
            <Card>
                <CardBody
                    title={"This is the title"}
                    bodyText={"This is the body text"}
                />
                <List data={characters} onSelect={handleSelect} />
            </Card>
            <Button
                func={changeState}
                clicked={clicked}
                typeClass={typeClass}
            />
        </div>
    );
}

export default App;
