import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container";
import Table from "./Table";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <Table></Table>
        </Container>
    </StrictMode>
)