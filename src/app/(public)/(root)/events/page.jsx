import { Events } from "../../components/sections/events"

const EventPage = () => {

  const title = "All events"

  return (
    <div className="wrapper mb-20 mt-5">
      <Events title={title}/>
    </div>
  )
}

export default EventPage
