import Card, { CardBody } from "./components/Card";

function App() {
    return (
        <Card>
            <CardBody
                title={"This is the title"}
                bodyText={"This is the body text"}
            />
        </Card>
    );
}

export default App;
