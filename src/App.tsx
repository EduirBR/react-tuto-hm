import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
    const characters = ["Goku", "Tanjiro", "Eren"];
    const handleSelect = (e: string) => {
        console.log(e);
    };
    return (
        <Card>
            <CardBody
                title={"This is the title"}
                bodyText={"This is the body text"}
            />
            <List data={characters} onSelect={handleSelect} />
        </Card>
    );
}

export default App;
