import { CSSProperties, useState } from "react";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";

function App2() {
    const [minionsList, setState] = useState(["Kamado"]);

    const bodyCss: CSSProperties = {
        margin: "20px",
        textAlign: "center",
    };

    const buttonCSS: CSSProperties = {
        width: "250px",
        display: "flex",
        justifyContent: "space-between",
    };

    const addButton = {
        class: "btn-primary",
        text: "Hire",
    };
    const addFun = () => {
        let minions = minionsList.filter((i) => i.includes("Minion"));
        if (minions.length > 0) {
            let lastMinion = minions[minions.length - 1];
            const words: string[] = lastMinion.split(" ");
            const mindex: number = Number(words[words.length - 1]);
            setState([...minionsList, `Minion ${mindex + 1}`]);
            return;
        }

        setState([...minionsList, "Minion 1"]);
    };
    const subsButton = {
        class: "btn-primary",
        text: "Fire",
    };

    const subsFun = () => {
        if (minionsList.length == 0) {
            alert("There is non one to fire");
            return;
        }
        minionsList.pop();
        setState([...minionsList]);
    };

    return (
        <div style={bodyCss}>
            <div style={buttonCSS}>
                <Button typeClass={addButton} func={addFun} />
                <Button typeClass={subsButton} func={subsFun} />
            </div>
            <Card>
                <CardBody
                    bodyText={"This a card to Manage minions"}
                    title={"Minions Management"}
                />
                <List data={minionsList} />
            </Card>
        </div>
    );
}

export default App2;
