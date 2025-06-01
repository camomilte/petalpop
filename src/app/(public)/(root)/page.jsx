import { Events } from "../components/sections/events"
import Hero from "../components/sections/hero"

const HomePage = () => {

  const title = "Upcoming events"

  return (
    <>
      <div className="wrapper">
        <Hero />
      </div>
      <div className="bg-hot">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path d="M0 0v4c154 96 190 17.9 300 17.9 92 0 92 78.1 200 78.1s108-78.2 200-78.2c110 0 146 78.2 300-17.8V0H0Z" fill="#FFCCAD"></path></svg>
        <div className="wrapper mt-10 pb-20">
          <Events title={title}/>
        </div>
      </div>
      <svg className="mb-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path d="M0 0v4c136 143.8 183.8-73.2 297 26.6 72.2 63.7 97 99 184.7 33.2a30.5 30.5 0 0 1 36.6 0c87.6 65.8 112.5 30.5 184.7-33.2C816.2-69.2 864 147.7 1000 4V0H0Z" fill="#FF7A14"></path></svg>
    </>
  )
}

export default HomePage
