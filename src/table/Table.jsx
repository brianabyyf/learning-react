import Row from "./Row";

export default function Table() {
    return (
        <table border={"1"}>
            <tbody>
                <Row id={"1"} text={"satu"}></Row>
                <Row id={"2"} text={"dua"}></Row>
                <Row id={"3"} text={"tiga"}></Row>
                <Row id={"4"} text={"empat"}></Row>
                <Row id={"5"} text={"lima"}></Row>
            </tbody>
        </table>
    )
}