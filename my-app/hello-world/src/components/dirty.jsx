import reactDOM from "react-dom/client"

export default function Joke(props) {
    return (
        <main>
            <p><b>{props.setup}</b></p>
            <p>{props.punchline}</p>
            <hr />
        </main>
   
    )
}

