import { createRoot } from "react-dom/client"
import Header from "./component/Header";
import Entry from "./component/Entry";
import data from "./data.js"

const root = createRoot(document.getElementById("root"));

const travels = data.map((travel) => {
    return <Entry
            key={travel.id}
            enrty={travel}
        />
})

root.render(
    <>
        <Header />
        <div className="container">
            {travels}
        </div>
    </>
)