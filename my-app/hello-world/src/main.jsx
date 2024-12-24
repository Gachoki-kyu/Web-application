import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById("root"))

function Page() {
  return (
    <div>
      <header>
        <img src="/src/assets/logo192.png" alt="logo" />
    </header>
    <h2>why i want to learn react</h2>
    <ol>
        <li>it is exiting</li>
        <li>just learning for fun</li>
    </ol>
    </div>
  )
}

root.render(
 <Page/>
)