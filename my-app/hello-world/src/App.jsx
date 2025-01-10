import Dirty from "./components/dirty"
import Header from "./components/Peronal"
import Entry from "./components/Placeholder"
import Jokes from "./jokes"
export default function App() {
  
  const joun = Jokes.map((location) => {
    return (
      <Entry img={location.img} alt={location.img}
        title={location.title}
        country={location.country}
        date={location.date}
        description={location.description} googleMapsUrl={location.googleMapsUrl} />
      )
    })
  return (
    <>
      <Header />
      {joun}
      
    </>
  )

}