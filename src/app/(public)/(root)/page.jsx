import { Events } from "../components/sections/events"
import Hero from "../components/sections/hero"

const HomePage = () => {

  const title = "Upcoming events - :)"

  return (
    <div className="wrapper">
      <Hero />
      <Events title={title}/>
    </div>
  )
}

export default HomePage
