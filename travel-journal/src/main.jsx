import { createRoot } from "react-dom/client"
import Header from "./component/Header";
import Entry from "./component/Entry";

const root = createRoot(document.getElementById("root"));
root.render(
    <>
        <Header />
        <div className="container">
            <Entry />
        </div>
    </>
)