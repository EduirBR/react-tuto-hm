import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
    const characters = ["Goku", "Tanjiro", "Eren"];

    return (
        <Card>
            <CardBody
                title={"This is the title"}
                bodyText={"This is the body text"}
            />
            <List data={characters} />
        </Card>
    );
}

export default App;
